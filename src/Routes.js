import React from 'react';
import {Switch } from 'react-router-dom'
import RouteHandler from './Components/RouterHandler';

import Ads from './pages/ads';
import News from './pages/News';
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import NotFound from './pages/NotFound'
import RegisterNew from './pages/RegisterNews';



export default () =>{

    return <Switch>
        <RouteHandler  exact path="/">
            <Home />
        </RouteHandler>

        <RouteHandler exact path="/About">
           <About />
        </RouteHandler>

        <RouteHandler  loggedAuthorize exact path="/Signin">
            <SignIn /> 
        </RouteHandler>

        <RouteHandler loggedAuthorize exact path="/signup">
            <SingUp />
        </RouteHandler>
        
        <RouteHandler  authorize exact path="/post-news-ad">
            <RegisterNew />
        </RouteHandler>

        <RouteHandler exact path = "/ads">
            <Ads />
        </RouteHandler>

        <RouteHandler exact path = "/news">
            <News />
        </RouteHandler>

        <RouteHandler>
            <NotFound />
        </RouteHandler>

    </Switch>
}