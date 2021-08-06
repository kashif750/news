import React,{Fragment} from 'react';
import UsersPage from './components/UsersPage.js';
import NavigationBar from './components/NavigationBar.js';

const App=()=>{

    return(
        <Fragment>
            <NavigationBar/>
            <h1>kashif niaz</h1>
            <h1>Webpack Testing</h1>
            <UsersPage/>
        </Fragment>
    )
};

export default App;