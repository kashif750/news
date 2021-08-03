import { createStore,applyMiddleware } from "redux";
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export const history=createBrowserHistory({
    basename:'/'
});


const store=createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware
        )
    )
);

export default store;