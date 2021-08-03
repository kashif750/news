import userReducer from './userReducer.js';

import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';


const rootReducer=(history)=>combineReducers({
    router:connectRouter(history),
    users:userReducer
});

export default rootReducer;