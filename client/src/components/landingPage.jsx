import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { getVideogames } from '../actions';
import { useEffect } from "react";

function LandingPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch]);

    function enter(e){
        
    }
    return <> 
        <div>
            <h1 className= 'title'>
                World of Games
            </h1>
            <Link to ='/home' onClick= {enter}>
            <h3 className= 'enter'>
                enter
            </h3>
            </Link>
        </div>
    </>
}

export default LandingPage