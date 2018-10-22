import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import {Provider}  from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers'
import thunkMiddleware from 'redux-thunk'; //thunkMiddleware checks the action to see if there is an action that returns a function instead of an object

const logger = createLogger(); //A logger for redux - a middleware

//Create a Redux Store - Source of all truth

//Combine all reducers into one root reducer
const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));



ReactDOM.render(
	<Provider store = {store} >
		<App />
	</Provider>,	
	document.getElementById('root'));
registerServiceWorker();
