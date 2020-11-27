import Styled from 'styled-components';

export const PageArea = Styled.div`
form{

    background-color:rgba(0, 0, 0, 0.1);
    border-radius:20px;
    padding:20px;
    width:40vw;
    margin:4px auto 20px;
    justify-content:center;
    text-align:center;    
    box-shadow: 0px 0px 3px #5f7fd8;
    
    .area{
        display:flex;
        padding:10px;
        justify-content:center;
        text-align:center;
        max-widht:600px;
        color:#000;
        font-weight:bold;

    .area--title{
        font-size:16px;
        text-align:left;
    }

    .area--input{
        flex:1;
        margin:auto;
        width:100%;
        text-align: right;
        
        input{
        
        outline:0;
        width:300px;
        border-radius:5px;
        font-size:16px;
        
        &:focus{
            border:2px solid #5f7fd8;
            transition:all ease .8s;
        }
    }
    button{
        margin:auto;
        font-size:17px;
        width:300px;
        height:30px;
        border-radius:5px;
        font-weight:bold;
        background-color:#5f7fd8;
        color:#FFF;
   }
    }
    
    #buttonRegister{
        text-align:center;
    } 
}
}
`;  