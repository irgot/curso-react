import React,{Component} from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
export default class Contador extends Component{
    
    state = {
        numero:this.props.numeroInicial,
        passo:1
    }
    
    inc = () =>{
        this.setState({numero:this.state.numero+this.state.passo})
    }
    dec = () =>{
        this.setState({numero:this.state.numero-this.state.passo})
    }
    setPasso = (novoPasso)=>{
        this.setState({passo:+novoPasso})
    }
    render(){
        return(
            <div>
                <h1>Contador</h1>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes inc={this.inc} dec={this.dec}></Botoes>
            </div>
        )
    }
}
