import React,{useState, useEffect} from 'react';
import { PageArea, SearchArea} from './Styled';
import UseApi from '../../helpers/Api';
import { Link } from 'react-router-dom';
import { PageContainer, PageTitle,PageBody } from '../../Components/MainComponents'



const Page =()=>{

        const api = UseApi();
        const [category, setCategory]=useState([]);
        const [adList, setAdList]=useState([]);

        useEffect(()=>{
             const getCategories = async()=>{

                 const sCategory = await api.getCategories();
                 console.log(sCategory);
                 setCategory(sCategory);
                }
                
                getCategories();
        },[])

        useEffect(()=>{
            const getRecentAds = async()=>{

                const json = await api.getAds({
                    sort:'desc',
                    limit:2,
                });
                setAdList(json);
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
                                    value={value.category}
                                >{value.category}</option>
                            )}
                        </select>
                    <button>Pesquisar</button>
                </form>
            </div>

            <div className="categoryList">
                    {category.map((value, index)=>
                    <Link key={index} to={`/ads?cat=${value.category}`} className="categoryItem">
                        <p>{value.category}</p>
                    </Link>
                    )}
            </div>

        </PageContainer>
    </SearchArea>

<PageArea>
                <PageTitle>Ultimas Notícias</PageTitle>
    <PageBody>
        <div className="BoxPage">
            <form>
                    {adList.map((value, index)=>
                <div key={index} className="area">
                    <div className="area--img">
                            <img src={value.url_imgs.split(',')[0]}></img>
                    </div>
                    <div className="area--text">
                        <div className="area--title">{value.title}</div>
                        <div className ="partition"></div>
                            <div className="area--news">
                                   <p>{value.news}</p> 
                            </div>
                            <div className="area--author">
                                <small>{value.name}</small>
                                <button>Ir para Notícia...</button>
                        </div>
                    </div> 
                </div>
                    )}
            </form>
        </div>
    </PageBody>
</PageArea>
</>
)
}
export default Page;