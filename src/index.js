import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index'
import { Provider } from 'react-redux';
import App from './App';

require('dotenv').config();

// store with middleware and redux devtools extension enabled
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// Only Testing...
//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
