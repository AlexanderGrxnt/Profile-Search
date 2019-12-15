import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchPeople, requestPeople } from './Reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchPeople, requestPeople})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
            <Provider store={store} >
                <App /> 
            </Provider> , document.getElementById('root'));

serviceWorker.unregister();