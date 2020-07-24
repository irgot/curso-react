import React,{useState} from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

export default props =>{
    const [valor,setValor]=useState('')

    return(
        <div>
            <InputGroup className="mb-3">
                {/* <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl
                value={valor}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e)=>{setValor(e.target.value)}}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                value={undefined}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"                
                />
            </InputGroup>
            <span>{valor}</span>
        </div>
    )
}
