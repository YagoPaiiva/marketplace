import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderArea} from './styled';
import img from './logo.png'

const Header = () =>{
     return(
        <HeaderArea>
            
        <div className="container">
            <div className="logo">
                <Link to = "/">
                    <img src={img} alt="Error"></img>
                </Link>
            </div>
        </div>
         </HeaderArea>
     );
}
export default Header;