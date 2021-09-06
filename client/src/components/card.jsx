import {useDispatch} from 'react-redux'
import {getById} from '../actions/index'
import { Link } from "react-router-dom";
import './card.css'


function Card({videogame}){
    const dispatch = useDispatch();
    
    function idToState(){
        dispatch(getById(videogame.ID))
    }

    return <div key= {videogame.ID} className= 'gameCard'>
        <Link 
        onClick={idToState} 
        to={'/videogame/'+ videogame.ID}
        >
        <h2>{videogame.name}</h2>
        </Link>
        {videogame.genres.map((g)=>{
             return g.name? <h1 key={g.name +'/'+ g.id }>{g.name}</h1> : 
             <h1 key={g +'/'+ videogame.ID }>{g}</h1>
        })}.
        <img
         className='image'
         src={videogame.image} 
         alt='agregame una foto :D'
         />
    </div>
}

export default Card