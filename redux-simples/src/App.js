import React,{useState} from "react";
import "./App.css";
// import Card from "./components/Card";
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

import Intervalo from './components/Intervalo'
function App() {
    const [min,setMin] = useState(1)
    const [max,setMax] = useState(1000)


    return (
        <div className="App">
            <h1>Exercício React - Redux</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>
            <div className="linha">
                <Media></Media>
                <Soma></Soma>
                <Sorteio></Sorteio>
                
            </div>
        </div>
    );
}

export default App;
