import React, {useState}from 'react';
import { useDispatch } from 'react-redux';




export default function GifForm() {

    let [newGif, setNewGif] = useState('');

    const dispatch = useDispatch();




    // const handleGifChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setNewGif({...newGif, name: event.target.value})
    // }

    // const addNewGif = event => {
    //     event.preventDefault();
    //     dispatch({ type: 'ADD_GIFS', payload: newGif });
    //     //updates the next plant to have a new id
    //     setNewGif({id:newGif.id + 1, name: ''});
    // }
    return (
        <div>
            <h3>This is the form</h3>
        

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



