import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

// ENTRY POINT FILE

// create redux store
const store = createStore(rootReducer);


// wait for DOM to load, then render components
document.addEventListener('DOMContentLoaded', () => {

  // FOR TESTING
  // ************************************************************
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ************************************************************
  
  // Provider allows App component access to redux store
  // grab html element by id = root, and render App Component
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});



