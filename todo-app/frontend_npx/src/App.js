import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import Menu from './template/Menu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faCalendarCheck,faPlus,faTrash,faCheck,faUndo,faSearch,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes/Routes'

library.add(fab, faCheckSquare, faCoffee,faCalendarCheck,faPlus,faTrash,faCheck,faUndo,faSearch,faWindowClose)

function App() {
    return (
        <div className="container">
            <Menu></Menu>
            <Routes></Routes>
        </div>
    );
}

export default App;
