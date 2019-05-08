import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers'
import { Provider } from 'react-redux';
import Routes from './routes/Routes';

require('dotenv').config();

// store with middleware and redux devtools extension enabled
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// Testing...
//console.log(store.getState());

// connect the app to the store and render it
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
