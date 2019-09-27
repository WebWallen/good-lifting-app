import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App /> 
    </Provider>
</Router>,
document.getElementById('root'));
