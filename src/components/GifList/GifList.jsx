import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function GifList () {
    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'GET_GIFS'})
    }, [])

    console.log('gifList is', gifList);
    return(
        <div>
            {/* {gifList.map(gifImage)} */}
            
        </div>
    )
}

export default GifList;