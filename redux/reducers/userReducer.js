import {GET_ALL_USERS}from '../constants/actionTypes.js';

const userReducer=(state={all:[]},action)=>{

    switch(action.type){
        case GET_ALL_USERS:
            return {...state,all:action.payload};
        default:
            return state;
    }
    
}

export default userReducer;