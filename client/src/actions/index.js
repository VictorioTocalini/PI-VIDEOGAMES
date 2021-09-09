import {GET_GAMES,GET_GENRES,GET_BY_ID,GET_BY_NAME,GET_PLATFORMS,FILTER_BY_DB,ALFABETIC,RATING, GENRES} from './constant';

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
            console.log('byid action',json)
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

export function getPlatforms(){
    return function(dispatch){
        fetch(LH+'/platforms')
        .then( r=> r.json())
        .then(json => {
            dispatch({
                type: GET_PLATFORMS,
                payload: json
            })
        })
    }
}
export function databaseGame (value){
    return function(dispatch){
        fetch(LH + '/videogames')
        .then(r => r.json())
        .then(json => {
            if(value==='DB'){
                const arr = json.filter((d)=>d.hasOwnProperty('createdAt'))
                dispatch({
                    type:FILTER_BY_DB,
                    payload: arr
                })
            }if(value==='API'){
                const arr = json.filter((d)=> !d.hasOwnProperty("createdAt"))
                dispatch({
                    type:FILTER_BY_DB,
                    payload: arr
                })
            }if(value==='ALL'){
                dispatch({
                    type:FILTER_BY_DB,
                    payload: json
                }) 
            }  
        })
    }
}

export function alfabeticOrder (value){
    return function(dispatch) {
       fetch(LH + '/videogames')
       .then(r => r.json())
       .then(json => {
        if(value === 'Z-A'){
            json.sort(function(a,b){
                if( a.name > b.name ) {return -1};
                if( a.name < b.name ) {return 1 };
                return 0
            })
        }
        if(value === 'A-Z'){
            json.sort(function(a,b){
                if( a.name < b.name ) {return -1};
                if( a.name > b.name ) {return 1 };
                return 0
            })
        }
        dispatch({
            type:ALFABETIC,
            payload:json
        })
       })
   }
}

export function ratingOrder(value){
    return function(dispatch) {
        if(value === 'null') return
        fetch(LH + '/videogames')
        .then(r => r.json())
        .then(json => {
         if(value === 'max-min'){
             json.sort(function(a,b){
                 if( a.rating > b.rating ) {return -1};
                 if( a.rating < b.rating ) {return 1 };
                 return 0
             })
         }
         if(value === 'min-max'){
             json.sort(function(a,b){
                 if( a.rating < b.rating ) {return -1};
                 if( a.rating > b.rating ) {return 1 };
                 return 0
             })
         }
         dispatch({
             type:RATING,
             payload:json
         })
        })
    }
}
export function genreOrder(value){
    return function(dispatch) {
        if(value === 'null') return
        fetch(LH + '/videogames')
        .then(r => r.json())
        .then(json => {
            const arr =[];
            json.forEach((v)=>{
                v.genres.forEach((g)=>{
                    if(g.name){
                        if(g.name === value) arr.push(v)
                    }else {
                        if(g===value) arr.push(v)
                    }
                })
            })
         dispatch({
             type:GENRES,
             payload:arr
         })
        })
    }
}
