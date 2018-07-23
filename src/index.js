import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todoList from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import listAPI from './api/ListApi'

const store = createStore(todoList)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);

