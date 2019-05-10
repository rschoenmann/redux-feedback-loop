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
			feelings: 0,
			understanding: 0,
			supported: 0,
			comments: 0
		}	


const feedbackReducer = (state = feedback, action) => {
	switch (action.type) {
		case 'ADD_FEELINGS':
			return {
				...state,
				[action.name]: action.payload
			}
		default:
			return state;
	}
}

const storeInstance = createStore(
	combineReducers({
		feedbackReducer
	}),
	applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
