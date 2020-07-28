import React from 'react'
import {FormControl} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './TodoForm.css'
export default props=> {
    return(
        <div role='form' className='todoForm'>
            <div className='todoInput'>
                <input type="text"  placeholder='Adicione uma tarefa'/>
            </div>           
            <div classname='todoButtons'>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon='plus'></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}