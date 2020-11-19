import React,{useState, useEffect} from 'react';
import { PageArea, SearchArea} from './Styled';
import UseApi from '../../helpers/Api';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { PageContainer } from '../../Components/MainComponents'


const Page =()=>{

        const api = UseApi();
        const [category, setCategory]=useState([]);

        useEffect(()=>{
             const getCategories = async()=>{

                 const sCategory = await api.getCategories();
                
                 setCategory(sCategory);
                }
                getCategories();
        },[])


return (<>

    <SearchArea>
        <PageContainer>
            <div className = "searchBox">
                <form method="GET" action="/ads">
                    <input type="text" name ="query" placeholder="O que você deseja?"></input>
                    <select name="state">
                        {category.map((value, index)=> 
                            <option
                                key={index}
                                value={value}
                            >{value}</option>
                        )}
                    </select>
                    <button>Pesquisar</button>
                </form>
            </div>

            <div className="caregoryList">


            </div>

        </PageContainer>
    </SearchArea>

    <PageContainer>
        <PageArea>
            ...
        </PageArea>
    </PageContainer>

</>
)
}
export default Page;