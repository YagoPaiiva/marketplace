import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogged} from '../helpers/AuthHandler';


export default({children, ...rest})=>{

    let logged = isLogged();

    let authorize = (rest.private && logged) ? false : true; 
    let Logged  = (rest.isLogged && logged) ? false : true;

    return(
        <Route
            {...rest}

        render={()=>
            authorize? children: <Redirect to="/" />
        } 

        render={()=>
            Logged?children:<Redirect to="/signin" />
        }
        />
    );
}