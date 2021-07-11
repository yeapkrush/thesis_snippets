/*
    Implemented code in [index.js] main JavaScript file of the project, to add Redux
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './src/reducers';

// Creating the Redux Store with the structre defined by [Reducers]
const store = createStore(Reducers, applyMiddleware(reduxThunk));

const withRNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => withRNRedux);
