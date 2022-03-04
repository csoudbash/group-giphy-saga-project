import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import GifItem from '../GifItem/GifItem';


// this actually recieves the favs from the database?
function GifList () {
    const gifList = useSelector(store => store.gifList);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'GET_GIFS'})
    }, [])


    

    console.log('gifList is', gifList);
    return(
        <div>
        {gifList.map((gifImg) => {
            return (
                <GifItem key={gifImg.id} gifImg={gifImg} />
            )
        })}
        </div>
    )
}

export default GifList;