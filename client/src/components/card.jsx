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
        <ul  className='genres'>
        {videogame.genres.map((g)=>{
            return g.name? <li  key={g.name +'/'+ g.id }>{g.name}</li> : 
            <li  key={g +'/'+ videogame.ID }>{g}</li>
        })}.
        </ul>
        <img
         className='image'
         src={videogame.image} 
         alt=''
         />
    </div>
}

export default Card