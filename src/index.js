import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line no-unused-vars
import VConsole from 'vconsole';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

// new VConsole()



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
