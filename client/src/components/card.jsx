import {useDispatch} from 'react-redux'
import {getById} from '../actions/index'
import { Link } from "react-router-dom";


function Card({videogame}){
    const dispatch = useDispatch();
    
    function idToState(){
        dispatch(getById(videogame.id))
    }

    return <div className= 'gameCard'>
    <Link 
    onClick={idToState} 
    to={'/videogame/'+ videogame.ID}
    >
        <h2>{videogame.name}</h2>
    </Link>
        {videogame.genres.map((g)=>{
            return <h1 key={g.id}>{g.name}</h1>
        })}
        <img
         className='image'
         src={videogame.image} 
         alt='agregame una foto :D'
         />
    </div>
}

export default Card