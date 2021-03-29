import React from 'react';
import ReactDOM from 'react-dom';

//store
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//style
import App from './App';
import './index.css';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
