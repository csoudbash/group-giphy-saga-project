import axios from "axios";
import { put } from "redux-saga/effects";

// this generator function will push our gif to the favorites database
export default function* postGifs(action) {
    // console.log(action.payload)
    // try {
    //     yield axios.get('giphy', action.payload); // url :id ??
    //     yield put({type: 'SET_GIFS'});
    // } catch(error) {
    //     console.log('posting in postGifs', error);
    // }
    
                
}; // end of postGifs


// $action.payload
// results.data 
// action.payload.data