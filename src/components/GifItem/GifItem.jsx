import React from 'react';
import { useDispatch } from 'react-redux';
import './GifItem.css'


export default function GifItem({ image }) {

    const dispatch = useDispatch();

    const postFav = (favGif) => {
        console.log('Ayyy');
        // dispatch to postGifs saga 
        dispatch({type: 'ADD_GIFS', payload:{fav: favGif}}) //What's the payload??? single gifItem
    }

return (
<div className='row'>
    <div id="gifItem">
        <img key={image.id} src={image.images.fixed_height.url} />

        <button
        onClick={postFav}
        >Fav Dis BETCH</button>
    </div>
    </div>

)

}; // end of GifItem