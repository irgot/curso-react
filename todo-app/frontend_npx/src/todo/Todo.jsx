import React,{Component} from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component{
    
    constructor(props){
        super(props)
        this.state = { 
            description:'', 
            list:[],
            abestado:'asdf'
        }        
    }
    componentDidMount(){
        this.refresh();
    }
    refresh( description = ''){
        const search = description? `&description__regex=/${description}/`:''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp=>{
            this.setState({description, list:resp.data})
        })
    }
    handleChange(e){
        
        this.setState({description:e.target.value})
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(resp=>{ 
            this.refresh()
        })
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp=>{
            this.refresh(this.state.description);
        })
    }
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{done:true}).then(resp=>{
            this.refresh(this.state.description);
        })
    }
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{done:false}).then(resp=>{
            this.refresh(this.state.description);
        })
    }
    handleSearch(){
        const description=this.state.description
        this.refresh(description)
    }
    handleClear(){
        this.refresh()
    }
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    handleAdd={()=>this.handleAdd()} 
                    description={this.state.description} 
                    handleChange={(e)=>this.handleChange(e)}
                    handleSearch={()=>this.handleSearch()}
                    handleClear={()=>this.handleClear()}
                ></TodoForm>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={(todo)=>this.handleRemove(todo)}
                    handleMarkAsDone={(todo)=>this.handleMarkAsDone(todo)}
                    handleMarkAsPending={(todo)=>this.handleMarkAsPending(todo)}
                ></TodoList>
            </div>
        )
    }
}