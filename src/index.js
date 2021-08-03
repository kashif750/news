import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

// import components
import App from './App.js';

import store,{history} from '../redux/store.js';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);