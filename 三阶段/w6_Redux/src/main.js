import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '@/store';
import App from './App'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)