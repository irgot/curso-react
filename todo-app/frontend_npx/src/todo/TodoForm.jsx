import React from 'react'
import IconButton from '../template/IconButton'
import './TodoForm.css'
export default props=> {
    const keyHandler = (e) =>{
        if(e.key==='Enter'){
            e.shiftKey?props.handleSearch() : props.handleAdd()            
        }else if(e.key==='Escape'){
            props.handleClear()
        }
    }
    return(
        <div className='todoForm'>
            <div className='todoInput'>
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder='Adicione uma tarefa' 
                    value={props.description} 
                    onChange={(e)=>props.handleChange(e)}
                    onKeyUp={(e)=>keyHandler(e)}
                />

            </div>           
            <div className='todoButtons'>
                <IconButton 
                    style={['primary']} 
                    icon='plus'
                    onClick={props.handleAdd}>
                </IconButton>
                <IconButton 
                    style={['info']} 
                    icon='search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton
                    style={['default']}
                    icon='window-close'
                    onClick={props.handleClear}>
                </IconButton>
            </div>
        </div>
    )
}