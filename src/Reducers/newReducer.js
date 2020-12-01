const initialState ={
    textNews:'',
    image:'',
    author:''
}

const NewsReducers = (state = initialState, action)=>{

    switch (action.type){

        case 'SET_NEWS':
            return{...state,
            image:action.payload.image,
            textNews:action.payload.textNews
            };

        break;

    }
    return state;
}

export default NewsReducers;