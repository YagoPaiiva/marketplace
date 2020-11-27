import React, {useEffect, useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {PageArea} from './Styled';
import {useSelector} from 'react-redux'
import USEApi from '../../helpers/Api';
import {PageContainer, PageTitle, ErrorMessage} from '../../Components/MainComponents';

const Page = () => {

    const api = USEApi();
    const fileField = useRef();
    const history = useHistory();
    const [disable, setDisable]=useState('');
    const [title, setTitle]=useState('');
    const [category, setCategory]=useState([]);
    const [categories, setCategories]=useState('');
    const [news, setNews]=useState('');
    const [error, setError]=useState('');
    
    useEffect(()=>{
        const getCategories = async()=>{

            const sCategory = await api.getCategories();
            setCategory(sCategory);
            setDisable(false);
        }
        getCategories();  
    },[]);

    const handleSubmit = async () =>{
        const formData = new FormData();
        
        formData.append('title', title);
        formData.append('categories', categories);
        formData.append('news', news);
        
        if(fileField.current.files.length > 0){
            for(let count = 0; count < fileField.current.files.length;count++)
            formData.append('photo', fileField.current.files[count]);
        }
        
        const json = await api.postNews(formData);
        if(!json.error){
            history.push(`/ad/${json._id}`);
            return;
        }else{
            setError(json.error);
        }
    }

    return(
        <PageContainer>
            <PageTitle>Cadastrar Notícia</PageTitle>
                <PageArea>

        <form onSubmit={handleSubmit}>
                    {error &&
                        <ErrorMessage>{error}</ErrorMessage>
                    }

            <label className="area">
                <div className="area--title">Título da Notícia:</div>
                    <div className="area--input">   
                        <input
                            placeholder="Adicione um título a sua notícia..."
                            type="text"
                            disabled={disable}
                            value={title}
                            onChange={state=>setTitle(state.target.value)}
                            required
                        >
                        </input>
                    </div>
            </label>

            <label className="area">
                <div className="area--title">Categoria</div>
                <div className ="area--input">
                   <select 
                   onChange={state=>setCategories(state.target.value)}
                   required
                   className="Category">
                        <option></option>
                        {category && category.map((value, index)=>
                            <option
                            key={index}
                            value={value.category}
                            >{value.category}</option>
                        )}
                    </select>
                </div>
            </label>

            <label className="area">
                <div className="area--title">Notícia</div>
                <div className ="area--input">
                        <textarea
                        placeholder="Digite aqui sua Nóticia.."
                        required
                        onChange={state=>setNews(state.target.value)}
                        >
                        </textarea>
                </div>
            </label>

            <label className="area">
                <div className="area-title">1 ou mais imagens</div>
                <div className = "area--input">
                    <input
                    type="file"
                    ref={fileField}
                    multiple
                    required
                    >
                    </input>
                    <small>Primeira foto sera a capa da Notícia</small>
                </div>
            </label>

            <label className = "area">
                <div className="area--tile"></div>
                <div className="area--input">
                <button disabled={disable}>Enviar Notícia</button>
             </div>
            </label>


                    </form>
                </PageArea>
        </PageContainer>
    )
}
 export default Page;
