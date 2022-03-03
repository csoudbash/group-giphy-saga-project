import React, {useState}from 'react';
import { useDispatch } from 'react-redux';




export default function GifForm() {

    let [gifInput, setGifInput] = useState('');

    const dispatch = useDispatch();

    
    const handleSubmit = () => {
        console.log('HIVE MIND');

    }; // end of handleInput


    return (
        <div id='gifForm'>
            <input 



            
            />

            <button
            onClick={handleSubmit}
            >
                HM HMMM HMMM HMMMMMM
            </button>

                

        </div>
    )
}