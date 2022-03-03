import React, {useState}from 'react';
import { useDispatch } from 'react-redux';



export default function GifForm() {

    let [gifInput, setGifInput] = useState('');

    const dispatch = useDispatch();

    
    // const handleInput = (event) => {

    // }; // end of handleInput


    return (
        <div id='gifForm'>
            {/* <input 
            // onClick={handleInput}
            value={gifInput}

            
            /> */}

                

        </div>
    )
}