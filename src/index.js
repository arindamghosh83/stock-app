import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {Provider} from 'react-redux';
import stockStore from './store/store'

axios.defaults.baseURL = 'https://www.alphavantage.co'

axios.interceptors.request.use(request => {
  return request;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
})


ReactDOM.render(
  <Provider store={stockStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
