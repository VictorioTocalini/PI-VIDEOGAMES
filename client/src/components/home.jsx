import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {getByName} from '../actions/index'
import './home.css'
import Card from './card';
import { getVideogames, alfabeticOrder,databaseGame} from '../actions';
import { useEffect } from "react";
import Nav from './nav';


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
    function alfOrder(e){
        e.preventDefault()
        dispatch(alfabeticOrder(e.target.value))
    }
    function DBorAPI(e){
        e.preventDefault()
        dispatch(databaseGame(e.target.value))
    }
    return <> 
    <Nav/>
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
        <label name= 'filters '>  filters</label>
        <select className= 'searchbar' onChange= {alfOrder}>
            <option value= 'A-Z'>A-Z</option>
            <option value='Z-A'> Z-A</option>
        </select>
        <select className= 'searchbar' onChange= {DBorAPI} >
            <option value= 'ALL'>all</option>
            <option value= 'DB'>from DataBase</option>
            <option value='API'> from API</option>
        </select>
    </div>
    <div className= 'cardBox'>
    {videogames.length>0? videogames.map((v)=> {
            return<Card
            key= {v.ID}
            videogame= {v}
            />
        }): null} 
    </div>
    </>
}

export default HomePage