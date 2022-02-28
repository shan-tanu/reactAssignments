import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import {Provider } from "react-redux";
import ProductCountComponent from './ProductCountComponent';
import rootReducer from "./Reducers/index";

var appStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={appStore}>
    <ProductCountComponent/>
    <App />    
  </Provider>,
  document.getElementById('root')
);

