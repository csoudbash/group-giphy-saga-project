import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GifItem from '../GifItem/GifItem';
import React, { useState } from 'react';
import axios from 'axios';


// this actually recieves the favs from the database?
function GifList({addGif}) {
    let [displayGifs, setDisplayGifs] = useState([]);

    // Makes our reduce avaiable in this component
    const gifList = useSelector(store => store.gifList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_GIFS' })
    }, [])

    // in SQL do like a limit of 15?
    // how to get this get to respond when submit is pressed?
    const meep = () => {
    }
    axios.get('/giphy')
        .then(response => setDisplayGifs(response.data.data))
            // .then(response => setDisplayGifs(response.data.data))
            .catch(error => console.log('error'))
        console.log('Hive MIND');
    
    






    console.log('gifList is', gifList);
    return (
        <div>
            
            {
                displayGifs?.map((image, i) => (
                    <GifItem key={i} 
                    image={image}
                    />
                    // <img key={i} src={image.images.fixed_height.url} />
                ))
            }

        </div>
    )
}

export default GifList;