import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_MOVIE_ACTION, FETCH_MOVIE_GENRE,
    FETCH_MOVIE_POPULAR, FETCH_GENRE_LIST
} from './actionTypes'


export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
}

export const fetchMovieAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const fetchMovieAction2 = (sort) => {
    return {
        type: FETCH_MOVIE_ACTION,
        sort
    }
}

export const fetchMovieGenre = (genre) => {
    return {
        type: FETCH_MOVIE_GENRE,
        genre
    }
}

export const fetchPopularMovie = () => {
    return {
        type: FETCH_MOVIE_POPULAR
    }
}


export const fetchGenreList = () => {
    return {
        type: FETCH_GENRE_LIST
    }
}

export const fetchSuccessAction = (receivedMovie) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovie
    }
}
export const fetchFailedAction = (failed) => {
    return {
        type: FETCH_FAILED,
        failed
    }
}