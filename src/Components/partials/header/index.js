import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { HeaderArea} from './styled';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';
import img from './img/logo.png'
import {useSelector, useDispatch} from 'react-redux'


const Header = () =>{
    
    const logged = isLogged();
    const name = useSelector(state=>state.user.name);
    const dispatch = useDispatch();

    const handleLogout =()=>{
        doLogout();
        dispatch({
            type:'SET_NAME',
            payload:{name:'', id:''}
        })
        window.location.href = "/";
    }

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
                            <h3>Bem vindo: {name}</h3>
                        </li>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/my-account/'>Minha conta</Link>
                        </li>

                        <li>
                            <button onClick={handleLogout}>Sair</button>
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