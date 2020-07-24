import React from 'react'
import {Button} from 'react-bootstrap'
export default props=>{  
    const idade = parseInt(Math.random()*(70-20))+20  
    return(
        <div>
            <div>
                Filho
            </div>
            <Button onClick={()=>{
                props.quandoClicar('Igor Souza',idade,true)
            }}>
                Clique Aqui
            </Button>
        </div>
    )
}
