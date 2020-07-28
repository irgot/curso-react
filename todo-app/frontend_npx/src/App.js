import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import Todo  from "./todo/Todo";
import About from './about/About'
import Menu from './template/Menu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faCalendarCheck,faPlus } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes/Routes'

library.add(fab, faCheckSquare, faCoffee,faCalendarCheck,faPlus)

function App() {
    return (
        <div className="container">
            <Menu></Menu>
            <Routes></Routes>
        </div>
    );
}

export default App;
