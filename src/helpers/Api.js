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
};   

const API = {

    login:async(Username, password) =>{

    const json = await apiFetchPost(
            '/signin',
            {Username, password}
            );
            return json;
    },

    register:async(Fullname, Username, Email, FullnameMother, Password)=>{
        const json = await apiFetchPost(
            '/create',
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
        let json = await apiFetchGet(
            '/Categories'
            )
        
        json= json.map(index=>index.Category);

        return json; 
    }

};

const ExportAPI = ()=>API;

export default ExportAPI;