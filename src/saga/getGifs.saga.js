import {put} from 'redux-saga/effects';
import axios from 'axios';

export default function* getGifs(action) {

    //saga to get gifs from the API giphy and send it to the reducer
    // is this saga gonna be talking to the router?

    console.log('in get', action.payload)
    try {
        const response = yield axios.get(`/giphy/${action.payload.search}`);
        yield put({type: 'FETCH_GIFLIST', payload: response.data.data});
    } catch(error) {
        
        console.log('Error getting fruits', error);
    }
}


 // end of getGifs

// $action.payload
// results.data 
// action.payload.data