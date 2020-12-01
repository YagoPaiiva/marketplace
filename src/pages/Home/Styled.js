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
            width:100%;
            height:120%;
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

    border-bottom: 1px solid #CCC;
    padding:20px;
   
    form{
        flex-wrap: wrap;
        display:flex;

    .area{
        flex-grow:1;
        display:flex;
        min-width:45%;
        max-width:45%;
        min-height:260px;
        text-align: center;
        margin:10px auto 10px auto;
        background-color:rgba(0, 0, 0, 0.235);
        border:2px solid #CCC;
        border-radius:5px;
        

    .area--img{
        display:flex;
        border-radius:10px;
        border:3px solid rgba(95, 127, 216, 0.548);
        
        img{
            border-radius:6px;
        }       
    }
    
    .area--text{
        width:100%;
        position:relative;

        .area--title{
            font-size:24px;
            margin:5px auto 10px;
            color:#000;
            text-shadow:1px 5px 13px #FFF;
            font-weight:bold;
        }

        .area--news{
            text-align: left;
            margin-left:10px;
            position:absolute;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:7;
            -webkit-box-orient:vertical;

            p{
                text-indent:30px;
                color:#212121;
                font-style:italic;
            }


        }
        
        .Link{
            position:absolute;
            left:0px;
            bottom:0;
            font-size:14px;
            color:#960101;
            text-shadow:1px 1px 1px #818181;;
            font-weight:bold;
            border:0;
            text-decoration:none;
            background:none;
            outline:0;
            cursor:pointer;
            margin-top:10px;
            
            &:hover{
                text-shadow:-1px 1px 10px #FF0000;
            }
        }

        small{
            position:absolute;
            right:0;
            bottom:0;
            font-size:15px;
            font-weight:bold;
            text-shadow:1px 3px 3px #FFF;
            cursor:pointer;

            &:hover{
                text-shadow:2px 4px 2px #CCC000;
            }
        }
        
    }
    
}
}
}
    .partition{
    height:0.5px;
    background-color:#FFF;
    box-shadow:3px 3px 5px #FFF;

    }
`;
