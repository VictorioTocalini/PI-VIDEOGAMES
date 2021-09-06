import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postVideogame, getGenres, getPlatforms} from '../actions';
import Nav from './nav';

export default function Formulario (){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[dispatch]);
    const platformsState = useSelector((state)=> state.platforms)
    const [platforms, setPlatforms] = React.useState([])
    const genresState = useSelector((state)=> state.genres);
    const [genres, setGenres] = React.useState([])
    const obj = {  
        name:"",
        description: "",
        release_date:"",
        rating:0,
        genres:"",
        platforms:"", 
        image:"",
    };
    const[input, setInput] = React.useState(obj);

    function onInputChange(e){
        e.preventDefault()
        if(e.target.name === "genres"){
            const value = e.target.value
            if(!genres.includes(value)) setGenres([...genres, value])
        }else  if(e.target.name === "platforms"){
            const value = e.target.value
            if(!platforms.includes(value)) setPlatforms([...platforms, value])
        }else {
            setInput({
                ...input,
                [e.target.name]:e.target.value
            })
        }
    }
    function handelSubmit(e){
        e.preventDefault();
        input.genres = genres
        input.platforms = platforms
        console.log(input)
        dispatch(postVideogame(input))
        setInput(obj)
        setGenres([])
        setPlatforms([])
        return alert('complete')
    }
    return<>
    <Nav/>
        <form onSubmit={handelSubmit}>
            <label htmlFor='name'> name </label>
            <input
              key='Name'
              type='text'
              name='name'
              onChange={onInputChange}
              value={input.name}
              required
            />
            <label htmlFor='description'> description </label>
            <input
              key='description'
              type='text'
              name='description'
              onChange={onInputChange}
              value={input.description}
              required
            />
            <label htmlFor='release_date'> release_date </label>
            <input
              key='release_date'
              type='date'
              name='release_date'
              onChange={onInputChange}
              value={input.release_date}
            />
            <label htmlFor='rating'> rating </label>
            <input
              key='rating'
              type='number'
              name='rating'
              onChange={onInputChange}
              value={input.rating}
            />
            <label htmlFor='genres' > genres </label>
            <select name='genres' onChange={onInputChange} >
                {genresState.map((g) => {
                    return <option key= {g.ID} value={g.name}>{g.name}</option>
                })}
            </select>
            <label htmlFor='platforms' > platforms </label>
            <select name='platforms' onChange={onInputChange} required >
                {platformsState.map((g) => {
                    return <option key= {g} value={g}>{g}</option>
                })}
            </select>
            <label htmlFor='image'> image </label>
            <input
              key='image'
              type='url'
              name='image'
              onChange={onInputChange}
              value={input.image}
            />
            <button type='submit'>CREATE</button>
        </form>
    </>

}
