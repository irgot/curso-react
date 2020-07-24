import React,{useState} from 'react'
import {FormControl,Button} from 'react-bootstrap'

export default props => {
    const [numero,setNumero] = useState(6)
    const [numerosGerados,setNumerosGerados] = useState([])
    const geraNumeros = (qtd) =>{
        const numeros = Array(qtd).fill(0).reduce((nums)=>{
            const novoNum=gerarNumeroNaoContido(1,60,nums)
            return [ ...nums,novoNum]
        }, [])

        return numeros

        // setNumerosGerados(Array(+num).fill().map(
        //     ()=>{
        //         return(parseInt(Math.random()*59+1))
        //     }
        // ))
    }

    const gerarNumeroNaoContido = (min,max,array) =>{
        const aleatorio = parseInt(Math.random()*(max+1-min))+min
        return array.includes(aleatorio)?gerarNumeroNaoContido(min,max,array):aleatorio
    }
    return(
        <div>
            <h3>Gerador de Números da Megasena</h3>
            <FormControl value={numero}  onChange={(e)=>{setNumero(e.target.value)}}>
            </FormControl>
            <Button onClick={(e)=>{geraNumeros(numero)}}>Gerar</Button>
            <div>
                {numerosGerados}
            </div>
        </div>
    )
}
