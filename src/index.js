import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.sass';
import App from './App';
import {rootReducer} from './redux/reducers/index';


// declare global {
// 	interface Window {
// 	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
//   }

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;
	
const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(
		thunk,
	)))

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>

)


ReactDOM.render(app, document.getElementById('root'));