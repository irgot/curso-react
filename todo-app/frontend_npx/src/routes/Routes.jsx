import React from 'react'
import {Route,Redirect} from 'react-router'
import {HashRouter} from 'react-router-dom'
import Todo from '../todo/Todo'
import About from '../about/About'



export default props=>{
    return(
        <HashRouter>
            <Route path='/todo' component={Todo}></Route>
            <Route path='/about' component={About}></Route>
            <Redirect from='*' to='/todo'></Redirect>
        </HashRouter>
    )
}