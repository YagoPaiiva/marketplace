import React from 'react';
import {Switch } from 'react-router-dom'
import RouteHandler from './Components/RouterHandler';
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import NotFound from './pages/NotFound'



export default ()=>{
    return <Switch>
        <RouteHandler exact path="/">
            <Home />
        </RouteHandler>

        <RouteHandler exact path="/About">
            <About />
        </RouteHandler>

        <RouteHandler private exact path="/Signin">
            <SignIn /> 
        </RouteHandler>

        <RouteHandler private exact path="/signup">
            <SingUp />
        </RouteHandler>

        <RouteHandler exact path="/post-an-ad">
            <About />
        </RouteHandler>

        <RouteHandler>
            <NotFound />
        </RouteHandler>

    </Switch>
}