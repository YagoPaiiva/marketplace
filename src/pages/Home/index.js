import React,{useState, useEffect} from 'react';
import { PageArea, SearchArea} from './Styled';
import UseApi from '../../helpers/Api';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../Components/MainComponents'



const Page =()=>{

        const api = UseApi();
        const [category, setCategory]=useState([]);
        const [adList, setAdList]=useState([]);

        useEffect(()=>{
             const getCategories = async()=>{

                 const sCategory = await api.getCategories();
                
                 setCategory(sCategory);
                }
                getCategories();
        },[])

        useEffect(()=>{
            const getRecentAds = async()=>{

                const json = await api.getAds({
                    sort:'desc',
                    limit:8,
                });
                setAdList(json.title)
            }
            getRecentAds();
        },[])


return (<>

    <SearchArea>
        <PageContainer>
            <div className = "searchBox">

                <form method="GET" action="/ads">
                    <input
                    type="text"
                    name ="q"
                    placeholder="O que você deseja?"
                    required
                    ></input>
                        <select name="Category">
                            {category.map((value, index)=> 
                                <option
                                    key={index}
                                    value={value.Category}
                                >{value.Category}</option>
                            )}
                        </select>
                    <button>Pesquisar</button>
                </form>
            </div>

            <div className="categoryList">
                    {category.map((value, index)=>
                    <Link key={index} to={`/ads?cat=${value.slug}`} className="categoryItem">
                        <p>{value.Category}</p>
                    </Link>
                    )}
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