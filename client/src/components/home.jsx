import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {getByName, getGenres} from '../actions/index'
import './home.css'
import { getVideogames, ratingOrder,alfabeticOrder,databaseGame,genreOrder} from '../actions';
import PaginateVideogames from './pagination';
import { useEffect } from "react";
import Nav from './nav';


function HomePage(){
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGenres())
    },[dispatch]);
    
    const genresState = useSelector(state=>state.genres)
    function handleInput(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    async function onSubmitSearch(){
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
    function ratOrder(e) {
        console.log(e)
        dispatch(ratingOrder(e.target.value))
    }
    function DBorAPI(e){
        e.preventDefault()
        dispatch(databaseGame(e.target.value))
    }
    function genOrder(e) {
        e.preventDefault()
        dispatch(genreOrder(e.target.value))
    }
    return <> 
    <Nav/>
    <div className='HomeBox'>
        <h1 className='title'> World of Games </h1>
        <div className='divHome'>
            <div className='divSearchbar'>
                <input 
                onChange={handleInput}
                key= 'Searchbar'
                className= 'Searchbar'
                name= 'Searchbar'
                value= {input.name}
                placeholder= 'search'
                />
                <button className='button_search' onClick= {onSubmitSearch}>enter</button>
            </div>
            <div className='divFilters'>
                <label className= 'labelFilter'>filters</label>
                <select className= 'filters' onChange= {alfOrder}>
                    <option value= 'A-Z'>A-Z</option>
                    <option value='Z-A'> Z-A</option>
                </select>
                <select className= 'filters' onChange= {genOrder}>
                    <option value= {null}>genres</option>
                    {genresState.map((g) => {
                        return <option key= {g.ID} value={g.name}>{g.name}</option>
                    })}
                </select>
                <select className= 'filters' onChange= {ratOrder}>
                    <option value= {null}>rating</option>
                    <option value='min-max'>min-max</option>
                    <option value='max-min'>max-min</option>
                </select>
                <select className= 'filters' onChange= {DBorAPI} >
                    <option value= 'ALL'>all</option>
                    <option value= 'DB'>from DataBase</option>
                    <option value='API'> from API</option>
                </select>
            </div>
        </div>
    </div>
    <PaginateVideogames/>
    </>
}

export default HomePage

// {videogames.length>0? videogames.map((v)=> {
//     return<Card
//     key= {v.ID}
//     videogame= {v}
//     />
// }): null} 