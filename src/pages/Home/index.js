import React from 'react';
import { Link } from 'react-router-dom';

const Page = ()=>{
    return<>
        <h1>Active page Home!</h1>
        <Link to="/About">About</Link>
    </>

}
export default Page;