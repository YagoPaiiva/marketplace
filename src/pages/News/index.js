import React,{useState, useEffect} from 'react'
import{NewSelection} from './styled';
import UseAPI from '../../helpers/Api';
import {} from 'react-router-dom';
import {} from '../../Components/MainComponents';
import {useDispatch,useSelector } from 'react-redux';

const Page=()=>{

        const api = UseAPI();

        const imageNewSelect = useSelector(state=>state.news.image);
        const textNews = useSelector(state=> state.news.textNews);

    return (<>
<NewSelection>  
    <div className="area">
        <div className="area--img">
            <img className="img--select" src={imageNewSelect} />
                <div className="area--news">
                    <p>
                        {textNews}
                    </p>
                </div>
                    <div className="area--author"></div>
        </div>    



    </div>
</NewSelection>

    </>)

}
export default Page;