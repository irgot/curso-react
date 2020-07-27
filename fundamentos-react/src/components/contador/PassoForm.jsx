import React from 'react'
import {FormControl} from 'react-bootstrap'

export default props => {
    return(
        <div>
            <FormControl
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            type='number'
            value={props.passo}
            onChange={(e)=>{props.setPasso(+e.target.value)}}                
            style={{marginBottom:10}}
            />
        </div>
    )
}
