import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const Page ={

    Main(){
        
   const name = useSelector(state=>state.user.name);
    
   return<>

        <h1>{name}</h1>

        <Link to="/About">About</Link>
    </>
    }
}
export default Page.Main;