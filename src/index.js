import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedback = {
			feeling: 0,
			understanding: 0,
			supported: 0,
			comments: ''
		}	

const adminFeedback = [];


const feedbackReducer = (state = feedback, action) => {
	// switch on action.type, spread feedback state and set appropriate key to action.payload
	switch (action.type) {
		case 'ADD_FEELING':
			return {
				...state,
				feeling: action.payload};
		case 'ADD_UNDERSTANDING':
			return {
				...state,
				understanding: action.payload};
		case 'ADD_SUPPORTED':
			return {
				...state,
				supported: action.payload};
		case 'ADD_COMMENTS':
			return {
				...state,
				comments: action.payload};
		case 'START_OVER':
			//called in Success component, if user wants to start over, we want to clear our feedback object
			return {};
		default:
			return state;
	}
}//end feedbackReducer

const getFeedbackReducer = (state=adminFeedback, action) => {
	if(action.type === 'GET_FEEDBACK'){
		//if action.type came from Admin dispatch, return response.data from GET request
		return action.payload;
	} else {
		return state;
	}//end if/else statement
}//end getFeedbackReducer

const storeInstance = createStore(
	combineReducers({
		feedbackReducer,
		getFeedbackReducer
	}),
	applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
