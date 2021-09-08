import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { getGenres, getPlatforms, getVideogames } from '../actions';
import { useEffect } from "react";

function LandingPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getPlatforms())
        dispatch(getGenres())
    },[dispatch]);

    return <> 
        <div>
            <h1 className= 'title'>
                World of Games
            </h1>
            <Link to ='/home' >
            <h3 className= 'enter'>
                enter
            </h3>
            </Link>
        </div>
    </>
}

export default LandingPage