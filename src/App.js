import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { Template } from './Components/MainComponents';
import Header from './Components/partials/header';
import Footer from './Components/partials/footer';

const Page =()=>{
  
  return(
   <BrowserRouter>
    <Template>
 
    <Header />
    
    <Routes />
    
    <Footer />
    
    </Template>
  </BrowserRouter>
  );
}

export default Page;
