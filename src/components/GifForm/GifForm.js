import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import GifList from '../GifList/GifList';




export default function GifForm() {
    // input for gif search
    let [newGif, setNewGif] = useState('');
    // displays the gif, will push into object 
    // let [displayGifs, setDisplayGifs] = useState([]);

    const dispatch = useDispatch();

    
    // const addGif = () => {
    //     console.log('Hive MIND')
    //     dispatch({ type: 'ADD_GIFS', payload: {gif: newGif}});
    //     setNewGif('');
    // }; // end of addGif

    
    const addGif = () => {
        // axios.get('/giphy')
        // .then(response => setDisplayGifs(response.data.data))
        //     // .then(response => setDisplayGifs(response.data.data))
        //     .catch(error => console.log('error'))
        console.log('Hive MIND')
        dispatch({ type: 'GET_GIFS', payload: { gif: newGif } });
        setNewGif('');
        // how to make newGif into a data???
        console.log(newGif)
    };
    
    return (
        <div>
            <h3>This is the form</h3>
            <input
                value={newGif}
                onChange={evt => setNewGif(evt.target.value)}
            />
            <button onClick={addGif}>Submit</button>
            {/* {
                displayGifs.map((image, i) => (
                    <img key={i} src={image.images.fixed_height.url} />
                ))
            } */}
            <GifList 
        
            />


        </div>
    );
}














