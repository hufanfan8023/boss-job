import React from 'react';
import ReactDom from 'react-dom';
import thank from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {counter} from './redux/index.redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(counter,compose(
    applyMiddleware(thank),
    window.devToolsExtension?window.devToolsExtension():()=>{}
))


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
