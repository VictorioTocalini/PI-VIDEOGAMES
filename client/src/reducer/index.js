import {GET_GAMES,GET_GENRES,GET_BY_ID,GET_BY_NAME,GET_PLATFORMS, FILTER_BY_DB,ALFABETIC} from '../actions/constant';

var initialState = {
    videogames: [],
    genres: [],
    platforms: [],
    byID: [],
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
                byID: action.payload
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
        case ALFABETIC:
            return{
                ...state,
                videogames: action.payload
            }
        case FILTER_BY_DB:
            return{
                ...state,
                videogames: action.payload
            }
        default: return state
    }
}