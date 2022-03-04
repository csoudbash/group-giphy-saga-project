import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import {useState} from 'react';

import getGifs from './saga/getGifs.saga';
import postGifs from './saga/postGifs.saga';



//rootSaga
function* rootSaga(){
    yield takeEvery('GET_GIFS', getGifs);
    yield takeEvery('ADD_GIFS', postGifs);
}

const sagaMiddleware = createSagaMiddleware();


// gifList Reducer
const gifList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFLIST':
            return action.payload;
        default:
            return state;
    }
};    




// store for Gifs
const storeInstance = createStore(
    combineReducers({
        gifList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
    );

// Runs Saga
    sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));

