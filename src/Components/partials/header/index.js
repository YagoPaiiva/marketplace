import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderArea} from './styled';
import { isLogged } from '../../../helpers/AuthHandler';
import img from './img/logo.png'

const Header = () =>{
    const logged = isLogged();

    return(
        <HeaderArea>
            
        <div className="container">
            <div className="logo">
                <Link to = "/">
                    <img src={img} alt="Error"></img>
                </Link>
            </div>
            <nav>
                <ul>
                    
                    {logged && 
                        <>
                        <li>
                            <Link to="/my-account">Minha conta</Link>
                        </li>

                        <li>
                            <Link to="/logout">Sair</Link>
                        </li>
                   
                        <li>
                            <Link to="/post-an-ad" className="button">Anunciar</Link>
                         </li>
                        </>
                    }
                    {!logged &&
                        <>

                            <li>
                                <Link to ="/"> Inicio</Link>
                            </li>

                            <li>
                                <Link to="/signin">Login</Link>
                            </li>    

                            <li>
                                <Link to="/signup">Cadastrar</Link>
                            </li>                    
                            <li>
                                <Link to="/signin" className="button">Anunciar</Link>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </div>
         </HeaderArea>
     );
}
export default Header;