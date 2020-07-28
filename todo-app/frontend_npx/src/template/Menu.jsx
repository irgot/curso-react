import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default props=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>                
                <Navbar.Brand href='#'><FontAwesomeIcon icon='calendar-check'></FontAwesomeIcon> TodoApp</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/todo">Tarefas</Nav.Link>
                    <Nav.Link href="#/about">Sobre</Nav.Link>                    
                </Nav>
            </Container>
        </Navbar>
    )
}