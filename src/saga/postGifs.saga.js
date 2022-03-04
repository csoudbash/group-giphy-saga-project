import axios from "axios";
import { put } from "redux-saga/effects";

export default function* postGifs(action) {
    try {
        yield axios.post('giphy', action.payload);
        yield put({type: 'GET_GIFS'});
    } catch(error) {
        console.log('posting in postGifs', error);
    }
    
                
}; // end of postGifs