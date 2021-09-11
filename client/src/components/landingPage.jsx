import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getGenres, getPlatforms, getVideogames } from '../actions';
import { useEffect } from "react";
import './landingPage.css'
function LandingPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getPlatforms())
        dispatch(getGenres())
    },[dispatch]);

    const videogames = useSelector(state => state.videogames)
    console.log(videogames)
    return <> 
        <div className='background'>
            <div className='ENTER_BUTTON'> 
            { videogames.length <1?  <img key='loading' src='https://i.gifer.com/ZKZx.gif'></img>:
            <Link to ='/home' >
                <img src='https://i.gifer.com/ZS3t.gif'></img>
            </Link>
            }
            </div>
        </div>
    </>
}
// background= './landing_image1.jpg'  loading= 'https://i.gifer.com/ZKZx.gif'  press start= 'https://i.gifer.com/ZS3t.gif'
export default LandingPage