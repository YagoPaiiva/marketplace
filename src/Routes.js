import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SingIn'
import NotFound from './pages/NotFound'



export default ()=>{
    return <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/About">
            <About />
        </Route>

        <Route exact path="/Signin">
            <SignIn /> 
        </Route>


        <Route>
            <NotFound />
        </Route>

    </Switch>
}