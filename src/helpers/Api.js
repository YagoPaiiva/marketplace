import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI= 'http://localhost:3001/api';

const apiFetchPost = async (endpoint, body) =>{

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(body),
    });


    const json = await res.json();

    if(json.notallowed){
            return {error: 'Usuario ou senha invalidos'};
        }
    return json;
}
const apiFetchGet = async (endpoint, body = [])=>{
  
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }


    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed){
        window.location.href ="/signin";
        return
    }

    return json;
}   
const apiFetchFile = async (endpoint, body =[])=>{
    
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        body
    });
    
    const json = await res.json();
    
    if(json.notallowed){
            return {error: 'Usuario ou senha invalidos'};
        }
    return json;
}

const API = {

    postLogin:async(Username, password) =>{

    const json = await apiFetchPost(
            '/signin',
            {Username, password}
            );
            return json;
    },

    postAccount:async(Fullname, Username, Email, FullnameMother, Password)=>{
        const json = await apiFetchPost(
            '/createAccount',
            {
                Fullname,
                Username,
                Email,
                FullnameMother,
                Password,
            })
                return json
        },

    getCategories:async()=>{
        const json = await apiFetchGet(
            '/getCategories'
            )
        return json; 
    },
    getAds:async(options)=>{

        const json =await apiFetchGet(
            '/getNews',
            options,
        );

        return json;
    },
    postNews:async(formData)=>{
        const json = await apiFetchFile(
            '/createNews',
            formData
        );
        return json;
    }

};

const ExportAPI = ()=>API;

export default ExportAPI;