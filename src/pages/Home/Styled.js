import styled from 'styled-components';

export const SearchArea = styled.div`

    background-color:#DDD;
    border-bottom: 1px solid #CCC;
    padding:20px 0;

    .searchBox{
        background-color:#5f7fd8;
        padding:20px 15px;
        border-radius:5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
        display:flex;

        form{
            flex:1;
            display:flex;


            input, select{
                height:40px;
                border:0;
                border-radius:5px;
                outline:0;
                font-size:16px;
                color:#000;
                margin-right:20px;

            }
            input{
                flex:1;
                padding:0 10px;
            }
            select{
                width:240px;
            }
            button{
                background-color:#53c553;
                font-size:16px;
                font-weight:bold;
                border-radius:8px;
                color:#FFF;
                text-shadow:1px 1px 1px #000;
                height:40px;
                padding:0 20px;
                cursor:pointer;
                
            &:hover{
                box-shadow:2px 2px 2px #000;
                background-color:#00f500;
            }
            }
        }
    }
    .categoryList{
        
        display:flex;
        flex-wrap:wrap;
       margin-top:20px;
 
    .categoryItem{

        width:23%;
        display:flex;
        text-decoration:none;
        height:50px;
        margin:10px;
        align-items:center;
        border:2px solid #666666;
        border-radius:10px;
        box-shadow:5px 5px 5px #000;
        transition: all .2s linear;

        p{
            display: flex;
            font-size:16px;
            color:#000;
            font-weight:bold;
            width:105%;
            height:105%;
            justify-content:center;
            align-items: center;
            
        &:hover{
            color:#3a3636;
            text-shadow: 5px 5px 5px #5f7fd8 ;
        }
        }
        &:hover{
            box-shadow:5px 5px 5px #1a3a94;
            border:5px solid #5f7fd8;
        }
    }
}

`;

export const PageArea = styled.div`
`;
