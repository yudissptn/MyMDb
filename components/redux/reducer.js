import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_SUCCEEDED_ACTION,
    FETCH_SUCCEEDED_GENRE, FETCH_SUCCEEDED_TOP_RATED, FETCH_SUCCEEDED_GENRE_LIST,
    FAVORITE_LIST, INSERT_FAVORITE_LIST, DELETE_FAVORITE_LIST, FETCH_SUCCEEDED_POPULAR,
    FETCH_SUCCEEDED_YEAR_TOP
} from './actionTypes'

defaultState = {
    movies: [],
    moviesAction: [],
    moviesByGenre: [],
    topRatedMovies: [],
    genreList: [],
    favoriteList: [],
    popularMovies: [],
    yearTop: []
}

const movieReducers = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state.movies, action.newMovie];
        case FETCH_SUCCEEDED:
            return { ...state, receivedMovies: action.receivedMovies };
        case FETCH_SUCCEEDED_ACTION:
            return { ...state, moviesAction: action.receivedMovies };
        case FETCH_SUCCEEDED_GENRE:
            return { ...state, moviesByGenre: action.receivedMovies };
        case FETCH_SUCCEEDED_TOP_RATED:
            return { ...state, topRatedMovies: action.receivedMovies };
        case FETCH_SUCCEEDED_GENRE_LIST:
            return { ...state, genreList: action.receivedMovies };
        case FETCH_SUCCEEDED_POPULAR:
            return { ...state, popularMovies: action.receivedMovies };
        case FETCH_SUCCEEDED_YEAR_TOP:
            return { ...state, yearTop: action.receivedMovies };
        case FAVORITE_LIST:
            return { ...state, favoriteList: action.payload }
        case INSERT_FAVORITE_LIST:
            return { ...state, favoriteList: state.favoriteList.concat(action.payload) }
        case DELETE_FAVORITE_LIST:
            return { ...state, favoriteList: [...state.favoriteList.filter(e => e.id !== action.payload.id)] }
        case FETCH_FAILED:
            return []

        default:
            return state;
    }
}

export default movieReducers;
