import './Card.css'
import React, { Children } from 'react'
export default props => {
    const estilo ={
        backgroundColor:props.color || "#f90",
        borderColor:props.color || "#f90",
    }
    return(
        <div className="Card" style={estilo}>
            <div className='Title'>
                {props.titulo}
            </div>
            <div className='Content'>
                {props.children}
            </div>

        </div>
    )
}
