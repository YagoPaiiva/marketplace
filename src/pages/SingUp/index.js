import React, {useState} from 'react';
import { PageArea } from './Styled';
import { PageContainer, PageTitle, ErrorMessage} from '../../Components/MainComponents';
import UseAPI from '../../helpers/Api';
import { useDispatch, useSelector } from 'react-redux';
import {doLogin} from '../../helpers/AuthHandler';

const Page =()=>{

    const api = UseAPI();

    const [fullname, setFullname]=useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail]=useState('');
    const [fullnameMother, setFullnameMother]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [disable, setDisable]=useState(false);
    const [error, setError]=useState('');

 const events = {
     
        dispatch:useDispatch(),
        name:useSelector(state=>state.user.name),
    
        handleSubmit:async(event)=>{
            event.preventDefault();
            setDisable(true);
            setError('');

            if(password !== confirmPassword){
                setError('Senhas não são iguais');
                setDisable(false);
                return;
            }

            const json = await api.register(fullname, username, email, fullnameMother, password);     

            if(json.error){
                setError(json.error);
            }else{
                doLogin(json.token);
                window.location.href=`/`;

                events.dispatch({
                    type:'SET_NAME',
                    payload:{
                        name:json.Fullname,
                        id:json.id
                    },
                
                });
            }

            setDisable(false);        
        
        },
    }
  
    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
                <PageArea>

                    {error &&
                        <ErrorMessage>{error}</ErrorMessage>
                    }



                    <form onSubmit={events.handleSubmit}>
        <label className="area">
            <div className="area--title">Nome Completo:</div>
            <div className="area--input">
                <input 
                placeholder="Digite seu Nome e Sobrenome"
                type="text"
                disabled={disable}
                value={fullname}
                onChange={estate=>setFullname(estate.target.value)}
                required        
                ></input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Username</div>
            <div className="area--input">
                <input
                placeholder="Digite seu Nome de Usuario"
                type="text"
                disabled={disable}
                value={username}
                onChange={state=>setUsername(state.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Email:</div>
            <div className="area--input">
                <input 
                placeholder="Digite seu email" 
                type="email" 
                disabled={disable}
                value={email}
                onChange={state=>setEmail(state.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Nome da Mãe</div>
            <div className="area--input">
                <input
                placeholder="Nome completo da Mãe"
                type="text"
                disabled={disable}
                value={fullnameMother}
                onChange={state=>setFullnameMother(state.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className ="area">
            <div className="area--title">Senha:</div>
            <div className="area--input">
                <input 
                placeholder="Digite sua senha" 
                type="password" 
                disabled={disable}
                value={password}
                onChange={state=>setPassword(state.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Confirmação de Senha:</div>
            <div className ="area--input">
                <input
                placeholder="Confirmar senha"
                type="password"
                disabled={disable}
                value={confirmPassword}
                onChange={state=>setConfirmPassword(state.target.value)}
                required
                ></input>
            </div>
        </label>

        <label className = "area">
            <div className="area--title" id="bt"></div>
            <div className="area--input">
                <button disabled={disable}>Cadastrar</button>
            </div>
        </label>


                    </form>
                </PageArea>
        </PageContainer>
    );


}

export default Page;