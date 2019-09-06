import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_MOVIE_ACTION, FETCH_MOVIE_GENRE,
    FETCH_MOVIE_TOP_RATED, FETCH_GENRE_LIST, INSERT_FAVORITE_LIST, DELETE_FAVORITE_LIST, FETCH_MOVIE_POPULAR
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

export const fetchTopRatedMovie = () => {
    return {
        type: FETCH_MOVIE_TOP_RATED
    }
}

export const fetchGenreList = () => {
    return {
        type: FETCH_GENRE_LIST
    }
}

export const fetchPopularList = () => {
    return {
        type: FETCH_MOVIE_POPULAR
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

export const insertToFavorite = (payload) => {
    return {
        type: INSERT_FAVORITE_LIST,
        payload
    }
}

export const deleteFavorite = (payload) => {
    return {
        type: DELETE_FAVORITE_LIST,
        payload
    }
}