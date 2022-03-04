import React, {useState}from 'react';
import { useDispatch } from 'react-redux';




export default function GifForm() {

    let [gifInput, setGifInput] = useState('');

    const dispatch = useDispatch();

    
    const handleSubmit = (gif) => {
        console.log('HIVE MIND');
        // dispatches gif to reducer 
        dispatch({type: 'ADD_GIF', payload: {gif: gif}});

    }; // end of handleInput


    return (
        <div id='gifForm'>
            <input 
            id='form-input'
            // value={form-input}



            
            />

            <button onClick={(event) => handleSubmit('gif')}>Submit</button>

                

        </div>
    )
}