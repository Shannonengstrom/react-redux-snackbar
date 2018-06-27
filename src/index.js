import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const snackReducer = (state = [], action) => {
    if(action.type === 'ADD_SNACK') {
        console.log('snackReducer', action);
        return [...state, action.payload]; 
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({ snackReducer }), applyMiddleware(logger)
);



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
