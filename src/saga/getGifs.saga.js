export default function* getGifs() {

    //saga to get gifs from the API giphy and send it to the reducer
    // is this saga gonna be talking to the router?
function* getGifs(){
    try {
        const gifResponse = yield axios.get('/giphy');
        yield put({type: 'SET_GIFLIST', payload: gifResponse.data});
    } catch(error) {
        
        console.log('Error getting fruits', error);
    }
}


}; // end of getGifs