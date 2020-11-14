import Styled from 'styled-components';

export const PageArea = Styled.div`
form{

    background-color:rgba(0, 0, 0, 0.4);
    border-radius:20px;
    padding:20px;
    width:30vw;
    margin:4px auto 20px;
    justify-content:center;
    text-align:center;    
    box-shadow: 0px 0px 3px #5f7fd8;
    
    .area{
        display:flex;
        padding:10px;
        justify-content:center;
        text-align:center;
        max-widht:500px;
        width:fit-content;
        margin:auto;
        color:#000;
        font-weight:bold;

    .area--title{
        margin:auto 5px;
        font-size:19px;
    }

    .area--input{
        
        flex:1;
    input{

        outline:0;
        border-radius:5px;
        font-size:16px;
        
        
        &:focus{
            border:2px solid #5f7fd8;
            transition:all ease .8s;
        }
    }
    } 
    [type=checkbox]{
        min-width: 15px;
        min-height: 15px;
        margin:5px;
    }
    button{
        font-size:15px;
        width:150px;
        border-radius:5px;
        box-shadow:1px 1px 3px #5f7fd8;
        font-weight:bold;
        color:#5f7fd8;
   }
}
}
`;