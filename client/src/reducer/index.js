import {GET_GAMES,GET_GENRES,GET_BY_ID,GET_BY_NAME,GET_PLATFORMS} from '../actions/constant';

var initialState = {
    videogames: [],
    genres: [],
    platforms: []
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                videogames: action.payload
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case GET_BY_ID:
            return{
                ...state,
                videogames: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                videogames: action.payload
            }
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: action.payload
            }
        default: return state
    }
}