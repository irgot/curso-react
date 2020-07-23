import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap';
import Primeiro from "./basicos/Primeiro";
import ComParametro from "./basicos/ComParametro";
import Fragmento from "./basicos/Fragmento";
import Aleatorio from './basicos/Aleatorio'
import Card from './layout/Card'

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="Exemplo de Card">
                <Aleatorio min={5} max={10}></Aleatorio>
                <Aleatorio min={5} max={10}></Aleatorio>
                <Aleatorio min={5} max={10}></Aleatorio>
                <Aleatorio min={5} max={10}></Aleatorio>
                <Aleatorio min={5} max={10}></Aleatorio>
                <Aleatorio min={5} max={10}></Aleatorio>
                <Button color="primary">Danger!</Button>
            </Card>
            {/* <Fragmento></Fragmento>
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Igor Souza"
                nota={9.5}
            ></ComParametro>
            <Primeiro></Primeiro> */}
            
            
        </div>
    );
};
