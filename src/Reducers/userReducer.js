import { Switch } from 'react-router-dom';

const initialState = {
    name:'',
    id:'',
}

 const UserReducers = (state = initialState, action)=>{
    
    switch (action.type){
    
        case 'SET_NAME':    
            return{...state,
                name:action.payload.name,
                id:action.payload.id,
            };
            break;

        }

    return state;
}

export default UserReducers;