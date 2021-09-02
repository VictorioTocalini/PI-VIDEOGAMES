import {GET_GAMES,GET_GENRES,GET_BY_ID,GET_BY_NAME} from './constant';

const LH = 'http://localhost:3001';

export function getVideogames (){
    return function(dispatch){
        fetch(LH+'/videogames')
        .then( r=> r.json())
        .then(json => {
            dispatch({
                type: GET_GAMES,
                payload: json
            })
        })
    }
}

export function getGenres (){
    return function(dispatch){
        fetch(LH+'/genres')
        .then( r=> r.json())
        .then(json => {
            dispatch({
                type: GET_GENRES,
                payload: json
            })
        })
    }
}
export function getById (id){
    return function(dispatch){
        fetch(LH+'/videogame/' + id)
        .then( r=> r.json())
        .then(json => {
            dispatch({
                type: GET_BY_ID,
                payload: json
            })
        })
    }
}
export function getByName (name){
    return function(dispatch){
        fetch(LH+'/videogames/q?name=' + name)
        .then( r=> r.json())
        .then(json => {
            dispatch({
                type: GET_BY_NAME,
                payload: json
            })
        })
    }
}
export function postVideogame(input){
    return function(){
        fetch(LH+'/addvideogame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        })
    }
}

