import React from 'react';
import { PageArea } from './Styled';
import { PageContainer, PageTitle} from '../../Components/MainComponents';

const Page =()=>{
    return(
        <PageContainer>
            <PageTitle>Tela de Login</PageTitle>
                <PageArea>
                    <form>

        <label className="area">
            <div className="area--title">Email:</div>
            <div className="area--input">
                <input placeholder="Digite seu email..." type="email"></input>
            </div>
        </label>

        <label className ="area">
            <div className="area--title">Senha:</div>
            <div className="area--input">
                <input placeholder="Digite sua senha..." type="password"></input>
            </div>
        </label>

        <label className="area">
            <div className="area--title">Lembrar senha</div>
            <div className="area--input">
                <input type="checkbox"></input>
            </div>
        </label>

        <label className = "area">
            <div className="area--tile"></div>
            <div className="area--input">
                <button>Entrar</button>
            </div>
        </label>


                    </form>
                </PageArea>
        </PageContainer>
    );
}
export default Page;