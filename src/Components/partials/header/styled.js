import styled from 'styled-components';

export const HeaderArea = styled.div`
    
    background-color:#FFFFFF;
    height:100px;
    border-bottom: 1px solid #CCC;

a{
    text-decoration:none;
}
.container{

    max-width:1000px;
    margin:auto;
    display:flex;

}

.logo{

    flex:1;
    display:flex;
    align-items:center;
    height:100px;
    
    img{
        height:100px;
    }
}

nav{
    padding-top:10px;
    padding-bottom:10px;

    ul,li{
        margin :0;
        padding:0;
        list-style:none;
    }

    ul{
        display:flex;
        align-items:center;
        height:80px;
    }

    li{
       margin-left:20px;
       margin-right:20px;
       
    a{
        color:#000;
        font-size:18px;
        font-weight: bold;
        text-decoration:none;
        
    &:hover {
        color:#5f7fd8;
        text-shadow: 0.2px 0.2px 0.2px #FF0000;
            }

    &.button {
        background-color:#5F7fD8;
        border-radius:7px;
        color:#FFF;
        padding:5px 10px;
            }

    &.button:hover {
        text-shadow:none;
        background-color:#2143a3;
                    }

        } 
    } 
}
`
;
