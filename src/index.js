import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';


import App from './components/app';

ReactDOM.render(
    <Provider store = {createStore(rootReducer, {}, applyMiddleware(promise))}> 
        <Router>
             <App /> 
        </Router>
    </Provider>, 
    document.getElementById('root')
);
