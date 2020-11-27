import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogged} from '../helpers/AuthHandler';


export default({children, ...rest})=>{

    let logged = isLogged();
    let authorize = (!logged && rest.authorize)? false : true;

    return(
        <Route
            {...rest}
            render={()=>
                authorize ? children : <Redirect to = "/signin" />
            }
        />
    );
}