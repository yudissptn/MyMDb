import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_SUCCEEDED_ACTION,
    FETCH_SUCCEEDED_GENRE, FETCH_SUCCEEDED_POPULAR, FETCH_SUCCEEDED_GENRE_LIST
} from './actionTypes'

defaultState = {
    movies: [],
    moviesAction: [],
    moviesByGenre: [],
    popularMovies: [],
    genreList: []
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
        case FETCH_SUCCEEDED_POPULAR:
            return { ...state, popularMovies: action.receivedMovies };
        case FETCH_SUCCEEDED_GENRE_LIST:
            return { ...state, genreList: action.receivedMovies };
        case FETCH_FAILED:
            return []

        default:
            return state;
    }
}

export default movieReducers;
