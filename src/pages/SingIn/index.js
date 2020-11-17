import React, {useState} from 'react';
import { PageArea } from './Styled';
import { PageContainer, PageTitle, ErrorMessage} from '../../Components/MainComponents';
import UseAPI from '../../helpers/Api';
import { useDispatch, useSelector } from 'react-redux';
import {doLogin} from '../../helpers/AuthHandler';

const Page =()=>{

    const api = UseAPI();

    const [username, setUsername] = useState('');
    const [password, setPassword]=useState('');
    const [rememberPassword, setRememberPassword]=useState(false);
    const [disable, setDisable]=useState(false);
    const [error, setError]=useState('');

 const events = {
     
        dispatch:useDispatch(),
        name:useSelector(state=>state.user.name),
    
        handleSubmit:async(event)=>{
            event.preventDefault();
            
            setDisable(true);

            const json = await api.login(username, password);     

            if(json.error){
                setError(json.error);
            }else{
                doLogin(json.token, rememberPassword);
                window.location.href=`/`;
                events.dispatch({
                    type:'SET_NAME',
                    payload:{name:json.slug},
                });
            }
            setDisable(false);        
        },
    }
  
    return(
        <PageContainer>
            <PageTitle>Tela de Login</PageTitle>
                <PageArea>

                    {error &&
                        <ErrorMessage>{error}</ErrorMessage>
                    }
                    <form onSubmit={events.handleSubmit}>
        <label className="area">
            <div className="area--title">Email:</div>
            <div className="area--input">
                <input 
                placeholder="Digite seu Username..." 
                type="text" 
                disabled={disable}
                value={username}
                onChange={estate=>setUsername(estate.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className ="area">
            <div className="area--title">Senha:</div>
            <div className="area--input">
                <input 
                placeholder="Digite sua senha..." 
                type="password" 
                disabled={disable}
                value={password}
                onChange={estate=>setPassword(estate.target.value)}
                required
                >

                </input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Lembrar senha</div>
            <div className="area--input">
                <input 
                type="checkbox" 
                disabled={disable}
                checked={rememberPassword}
                onChange={()=>setRememberPassword(!rememberPassword)}
                ></input>
            </div>
        </label>

        <label className = "area">
            <div className="area--tile"></div>
            <div className="area--input">
                <button disabled={disable}>Entrar</button>
            </div>
        </label>


                    </form>
                </PageArea>
        </PageContainer>
    );


}

export default Page;