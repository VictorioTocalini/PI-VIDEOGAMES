import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {getByName} from '../actions/index'
import './home.css'
import Card from './card';
import { getVideogames } from '../actions';
import { useEffect } from "react";

function HomePage(){
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch]);
 
    const videogames = useSelector((state)=> state.videogames);

    function handleInput(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };
    async function onSubmitSearch(e){
        const search = input.Searchbar;
        if(search){
            if(search.length > 1){
                dispatch(getByName(search))         
            }
        }
    }
 

    return <> 
    <div className='HomeBox'>
        <h1 className='title'> World of Games </h1>
        <button className='button_search' onClick= {onSubmitSearch}>search</button>
        <input 
        onChange={handleInput}
        key= 'Searchbar'
        className= 'Searchbar'
        name= 'Searchbar'
        value= {input.name}
        />
    </div>
    <div className= 'cardBox'>
    {videogames? videogames.map((v)=> {
            return<Card
            key= {v.id}
            videogame= {v}
            />
        }): null} 
    </div>
    </>
}

export default HomePage