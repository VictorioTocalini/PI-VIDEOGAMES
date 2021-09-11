import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postVideogame, getGenres, getPlatforms, getVideogames} from '../actions';
import Nav from './nav';
import './form.css'

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
        dispatch(postVideogame(input))
        dispatch(getVideogames())
        setInput(obj)
        setGenres([])
        setPlatforms([])
        return alert('complete')
    }
    return<>
    <Nav/>
        <form className='FORM' onSubmit={handelSubmit}>
            <label className= 'labelform' htmlFor='name'> name </label>
            <input
              maxLength={50}
              key='Name'
              type='text'
              name='name'
              onChange={onInputChange}
              value={input.name}
              required
              />
            <label className= 'labelform'htmlFor='description'> description </label>
            <input
              className= 'input_description'
              maxLength={500}
              size={50}
              key='description'
              type='text'
              name='description'
              onChange={onInputChange}
              value={input.description}
              required
              />
            <label className= 'labelform' htmlFor='release_date'> release_date </label>
            <input
              key='release_date'
              type='date'
              name='release_date'
              onChange={onInputChange}
              value={input.release_date}
              />
            <label className= 'labelform' htmlFor='rating'> rating </label>
            <input
              key='rating'
              type='number'
              name='rating'
              max={5}
              min={0}
              step={0.1}
              onChange={onInputChange}
              value={input.rating}
              />
            <label className= 'labelform' htmlFor='genres' > genres </label>
            <select name='genres' onChange={onInputChange} >
                {genresState.map((g) => {
                    return <option key= {g.ID} value={g.name}>{g.name}</option>
                })}
            </select>
            <ul className='form_list' >
                {genres.map((g)=>{
                    return g.name? <li className='Listed_item' key={g.id}>{g.name}</li> :
                    <li className='Listed_item' key={g}>{g}</li>
                })}
            </ul>
            <label className= 'labelform' htmlFor='platforms' > platforms </label>
            <select name='platforms' onChange={onInputChange} required >
                {platformsState.map((g) => {
                    return <option key= {g} value={g}>{g}</option>
                })}
            </select>
            <label className= 'labelform' htmlFor='image'> image </label>
            <input
              key='image'
              type='url'
              name='image'
              onChange={onInputChange}
              value={input.image}
              />
              <img width='10%' src={input.image} alt=''/>
            <button type='submit'>CREATE</button>
        </form>
        
    </>

}
