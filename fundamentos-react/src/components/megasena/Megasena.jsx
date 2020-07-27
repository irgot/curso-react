import React,{useState} from 'react'
import {FormControl,Button} from 'react-bootstrap'

export default props => {    
    
    
    const gerarNumeros = (qtd) =>{
        
        const numeros = Array(qtd).fill(0).reduce((nums)=>{
            const novoNum=gerarNumeroNaoContido(1,60,nums)            
            return [ ...nums,novoNum]
        }, [])
        .sort((n1,n2)=>n1-n2)        
        return numeros
    }

    const gerarNumeroNaoContido = (min,max,array) =>{
        const aleatorio = parseInt(Math.random()*(max+1-min))+min
        return array.includes(aleatorio)?gerarNumeroNaoContido(min,max,array):aleatorio
        
    }
    const retornaNumeros = (numeros)=>{
        return(numeros.map((numero,i)=>{            
            return(<div key={i}>{numero}</div>)
        }))
    }
    

    const [qtde,setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros,setNumeros] = useState(numerosIniciais)  
    return(
        <div>
            <h2>Gerador de Números da Megasena</h2>  
            <div>
                <FormControl
                    placeholder="Quantidade de numeros"
                    value={qtde}
                    onChange={(e)=>{setQtde(+e.target.value)}}
                    type="number"
                    min='6'
                    max='10'
                ></FormControl>
            </div>          
            <Button onClick={ _=>{setNumeros(gerarNumeros(qtde))}} >Gerar</Button>
            <h3 key={350}>{retornaNumeros(numeros)}</h3>
            
        </div>
    )
}
