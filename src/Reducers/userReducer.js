import { Switch } from 'react-router-dom';

const initialState = {
    name:'Yago Paiva de Souza',
    email:'',
}

 const UserReducers = (state = initialState, action)=>{
    
    switch (action.type){
    
        case 'SET_NAME':    
            return{...state,
                name:action.payload.name,
                };
            break;

        }

    return state;
}

export default UserReducers;