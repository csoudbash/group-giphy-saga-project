import React, {useState}from 'react';
import { useDispatch } from 'react-redux';




export default function GifForm() {

    let [newGif, setNewGif] = useState('');

    const dispatch = useDispatch();

    const addGif = () => {
        console.log('Hive MIND')
        dispatch({ type: 'ADD_GIFS', payload: {gif: newGif}});
        setNewGif('');
    }

    return (
        <div>
            <h3>This is the form</h3>
            <input
            value={newGif}
            onChange={evt => setNewGif(evt.target.value)}
            />
            <button onClick={addGif}>Submit</button>

            
        </div>
    );
}












    

