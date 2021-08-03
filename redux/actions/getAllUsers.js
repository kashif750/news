import {GET_ALL_USERS} from '../constants/actionTypes.js';
import {GET_ALL_USERS_URL} from '../constants/urls.js';


export const getAllUsers=()=>{

    return dispatch=>{
        fetch(GET_ALL_USERS_URL)
        .then(response=>response.json()
        .then(data=>{
            dispatch(loadAllUsers(data));
            console.log("api data : "+data);
        }));
    }
}

const loadAllUsers=(users)=>{
   return{
        type:GET_ALL_USERS,
        payload:users
    }
}