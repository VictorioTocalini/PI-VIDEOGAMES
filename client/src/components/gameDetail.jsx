import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from "react";
import { getById } from '../actions';
import { useParams } from 'react-router-dom';
import './gameDetails.css'
import Nav from './nav';

function GameDetail(){
    const dispatch= useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getById(id))
    },[dispatch,id]);

    const game= useSelector(state=> state.byID)

    if(game.name){
        return <>
        <Nav/>
        <div className= 'cardBox '>
            <h1> {game.name} </h1>
            <h4> RATING : {game.rating>0? game.rating : 'no official rating'} </h4>
            <h3> RELEASE DATE :{game.released} </h3>
            <ul key= 'platforms 'className= 'platforms'>
                    LAUNCHED FOR:
                {game.platforms? game.platforms.map((g)=>{
                    return g.platform? <li key={g.platform.id}> {g.platform.name}</li> :
                        <li key={g}> {g} </li>
                }): null}
            </ul>
            <ul key='genres' className= 'genres'>
                GENRES:
                {game.genres? game.genres.map((g)=>{
                    return g.name? <li key={g.id}> {g.name}</li> :
                        <li key={g}> {g} </li>
                }): null}
            </ul>
            <img className='gameDetailImage' src={game.image} alt=''/> 
            <h3> description </h3>
            {game.description.replace(/<[^>]*>?/g, '')}
        </div>
    </>
    } else return<>
        <h1 className='error'> loading </h1>
     </>
}

export default GameDetail