import React from 'react'
import {Table} from 'react-bootstrap'
import IconButton from '../template/IconButton'
import './TodoList.css'
export default props => {
    const renderRows = () =>{
        const list= props.list || []
        return (list.map(todo=>{
            return(<tr key={todo._id}>
                <td className={todo.done?'markedAsDone':''}>{todo.description}</td>
                <td>
                    <IconButton 
                        hide={todo.done} 
                        style={['success']} 
                        icon='check'
                        onClick={()=>props.handleMarkAsDone(todo)}
                    >
                    </IconButton>

                    <IconButton 
                        hide={!todo.done} 
                        style={['warning']} 
                        icon='undo'
                        onClick={()=>props.handleMarkAsPending(todo)}
                    >
                    </IconButton>
                    
                    <IconButton 
                        style={['danger']} 
                        icon='trash'
                        onClick={()=>props.handleRemove(todo)}
                    >
                    </IconButton>

                </td>
            </tr>)
        }))
    }
    return(
        <Table striped hover >
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className={['todoActions']}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}