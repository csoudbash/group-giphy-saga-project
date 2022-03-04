import React, {useState}from 'react';
import { useDispatch } from 'react-redux';




export default function GifForm() {

    let [newGif, setNewGif] = useState('');

    const dispatch = useDispatch();

    const addGif = () => {
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

            {/* <form onSubmit={addNewGif}>
                <input type='text' value={newGif.name} onChange={handleGifChange} />
                <input type='submit' value='Add New Gif' />
            <pre>{JSON.stringify(newGif)}</pre>
            </form> */}
        </div>
    );
}












    
    // const handleSubmit = () => {
    //     console.log('HIVE MIND');
    //     // dispatches gif to reducer 
    //     // dispatch({type: 'ADD_GIF', payload: {gif: gifName}});

    // }; // end of handleInput


    // return (
    //     <div id='gifForm'>
    //         <input 
    //         id='form-input'
           



            
    //         />

    //         <button
    //         onClick={handleSubmit}
    //         >
    //             SUBMIT
    //         </button>

                

    //     </div>
    // )



