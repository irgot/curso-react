import React from 'react'
import {Button} from 'react-bootstrap'
export default (props) => {
    return(
        <>
            <Button onClick={props.inc}>+</Button>
            <Button variant='danger' onClick={props.dec}>-</Button>
        </>
    )
}
