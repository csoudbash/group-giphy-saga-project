import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import GifList from '../GifList/GifList';




export default function GifForm() {
    // input for gif search
    let [search, setSearch] = useState('');
    // displays the gif, will push into object 

    const dispatch = useDispatch();

    

    const addGif = () => {
        
        console.log('Hive MIND')
        dispatch({ type: 'SET_SEARCH', payload: { search: search } });
        setSearch('');
        // how to make newGif into a data???
        console.log(search);
    };
    


    return (
        <div>
            <h3>This is the form</h3>
            <input
                value={search}
                onChange={evt => setSearch(evt.target.value)}
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














