import React from "react";

// import { Button } from 'reactstrap';
import Primeiro from "./basicos/Primeiro";
import ComParametro from "./basicos/ComParametro";
import Fragmento from "./basicos/Fragmento";
import Aleatorio from './basicos/Aleatorio'
import Card from './layout/Card'
import "./App.css"
import Familia from "./basicos/Familia";
import FamiliaMembro from './basicos/FamiliaMembro'
import ListaAlunos from './repeticao/ListaAlunos'
import TabelaProduto from './repeticao/TabelaProduto'
import ParOuImpar from './condicional/ParOuImpar'
import UsuarioInfo from './condicional/UsuarioInfo'
import DiretaPai from './comunicacao/DiretaPai'
import IndiretaPai from './comunicacao/IndiretaPai'
import Inputi from './formulario/Input'
import Contador from './contador/Contador'
import Megasena from './megasena/Megasena'
export default props => {
    return (
        <div id="app" className="App">
            
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo='#14 - Megasena' color='#006633'>                    
                    <Megasena></Megasena>
                </Card>
                <Card titulo='#13 - Componente Controlado' color='#dd6666'>                    
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo='#13 - Componente Controlado' color='#dd6666'>                    
                    <Inputi></Inputi>
                </Card>
                <Card titulo='#12 - Comunicação Indireta' color='#dd6666'>                    
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo='#11 - Comunicação Direta' color='#dd0066'>
                    <DiretaPai></DiretaPai>                    
                </Card>
                <Card titulo='#10 - Condicional 2' color='#dddd00'>
                    <UsuarioInfo usuario={{nome:'Igor Souza'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email:'Igor Souza'}}></UsuarioInfo>
                </Card>
                <Card titulo='#09 - Renderização condicional' color='#770099'>
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>
                <Card titulo="#08 - Repetição Desafio" color="#5d9987">
                    <TabelaProduto></TabelaProduto>
                </Card>
                <Card titulo="07# - Repetição" color='#ff4c65'>
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#06 - Componente com Filhos">
                    <Familia sobrenome="Souzão">
                        <FamiliaMembro nome="João" {...props} ></FamiliaMembro>
                        <FamiliaMembro nome="Ana" {...props} ></FamiliaMembro>
                        <FamiliaMembro nome="Danielly" {...props}></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="#05 - Card " color="#650650">

                </Card>
                <Card titulo="#02 - Aleatório" color="#4a4e4d">
                    <Aleatorio min={5} max={10}></Aleatorio>
                    <Aleatorio min={5} max={10}></Aleatorio>
                    <Aleatorio min={5} max={10}></Aleatorio>
                    <Aleatorio min={5} max={10}></Aleatorio>
                    <Aleatorio min={5} max={10}></Aleatorio>
                    <Aleatorio min={5} max={10}></Aleatorio>                
                </Card>
                <Card titulo="#03 - Fragmento" color="#0e9aa7">
                    <Fragmento></Fragmento>
                </Card>
                <Card titulo="#02 - ComParametro" color="#f6cd61">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Igor Souza"
                        nota={9.5}
                    ></ComParametro>
                </Card>
                <Card titulo="#01 - Primeiro" color="#fe8a71">
                    <Primeiro></Primeiro> 
                </Card>
            </div>
        </div>
    );
};
