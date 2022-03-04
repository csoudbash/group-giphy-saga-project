import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import GifItem from '../GifItem/GifItem';

function GifList () {
    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'GET_GIFS'})
    }, [])

    console.log('gifList is', gifList);
    return(
        <div>
            <ul>
        {gifList.map((gifImg) => {
            return (
                <GifItem key={gifImg.id} gifImg={gifImg} />
            )
        })}
            </ul>
            
        </div>
    )
}

export default GifList;