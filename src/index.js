import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import {useState} from 'react';

const gifList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFLIST':
            return action.payload;
        default:
            return state;
    }
};    
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        gifList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
    );
    
    
    //saga to get gifs from the API giphy and send it to the reducer
    function* getGifs(){
        try {
            const gifResponse = yield axios.get('/giphy');
            yield put({type: 'SET_GIFLIST', payload: gifResponse.data});
        } catch(error) {
            console.log('Error getting fruits', error);
        }
    }
    
    //rootSaga
    function* rootSaga(){
        yield takeEvery('GET_GIFS', getGifs)
    }
    
    sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));

