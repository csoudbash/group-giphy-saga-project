import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';

import getGifs from './saga/getGifs.saga';
import postGifs from './saga/postGifs.saga';



//rootSaga
function* rootSaga(){
    yield takeEvery('SET_SEARCH', getGifs); // this is search
}

const sagaMiddleware = createSagaMiddleware();

// search Reducer 
const gifListReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GIFLIST':
            return action.payload;
        default:
            return state;
    }
};   

// // list Reducer
// const gifReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GIFS':
//             return action.payload;
//         default:
//             return state;
//     }
// };   




// store for Gifs
const storeInstance = createStore(
    combineReducers({
        gifListReducer,
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


