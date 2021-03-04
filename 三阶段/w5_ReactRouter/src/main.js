import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'

import App from './App'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.querySelector('#app')
)