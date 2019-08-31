import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_SUCCEEDED_GENRE, FETCH_FAILED, FETCH_MOVIE_ACTION,
    FETCH_SUCCEEDED_ACTION, FETCH_MOVIE_GENRE, FETCH_MOVIE_POPULAR, FETCH_SUCCEEDED_POPULAR, FETCH_GENRE_LIST,
    FETCH_SUCCEEDED_GENRE_LIST
} from '../actionTypes'
import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import { Api } from './api'

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesApi();
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchMoviesAction() {
    try {
        const receivedMovies = yield Api.getMoviesActionApi();
        yield put({ type: FETCH_SUCCEEDED_ACTION, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchMoviesGenre(key) {
    try {
        const receivedMovies = yield Api.getMoviesGenreApi(key.genre);
        yield put({ type: FETCH_SUCCEEDED_GENRE, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchPopularMovies() {
    try {
        const receivedMovies = yield Api.getMoviesPopularApi();
        yield put({ type: FETCH_SUCCEEDED_POPULAR, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchGenreLists() {
    try {
        const receivedMovies = yield Api.getListGenreApi();
        yield put({ type: FETCH_SUCCEEDED_GENRE_LIST, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovies)
    yield takeEvery(FETCH_MOVIE_ACTION, fetchMoviesAction)
    yield takeEvery(FETCH_MOVIE_GENRE, fetchMoviesGenre)
    yield takeEvery(FETCH_MOVIE_POPULAR, fetchPopularMovies)
    yield takeEvery(FETCH_GENRE_LIST, fetchGenreLists)
}
