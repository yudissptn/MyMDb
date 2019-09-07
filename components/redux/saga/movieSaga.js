import {
    ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_SUCCEEDED_GENRE, FETCH_FAILED, FETCH_MOVIE_ACTION,
    FETCH_SUCCEEDED_ACTION, FETCH_MOVIE_GENRE, FETCH_MOVIE_TOP_RATED, FETCH_SUCCEEDED_TOP_RATED, FETCH_GENRE_LIST,
    FETCH_SUCCEEDED_GENRE_LIST, FETCH_SUCCEEDED_POPULAR, FETCH_MOVIE_POPULAR, FETCH_SUCCEEDED_YEAR_TOP,
    FETCH_YEAR_TOP
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

function* fetchTopRatedMovies() {
    try {
        const receivedMovies = yield Api.getMoviesTopRatedApi();
        yield put({ type: FETCH_SUCCEEDED_TOP_RATED, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchGenreLists() {
    try {
        const receivedMovies = yield Api.getListGenreApi();
        yield put({ type: FETCH_SUCCEEDED_GENRE_LIST, receivedMovies: receivedMovies.genres });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchPopularLists() {
    try {
        const receivedMovies = yield Api.getPopularApi();
        yield put({ type: FETCH_SUCCEEDED_POPULAR, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

function* fetchYearTopLists() {
    try {
        const receivedMovies = yield Api.getThisYearTopApi();
        yield put({ type: FETCH_SUCCEEDED_YEAR_TOP, receivedMovies: receivedMovies.results });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error })
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovies)
    yield takeEvery(FETCH_MOVIE_ACTION, fetchYearTopLists)
    yield takeEvery(FETCH_YEAR_TOP, fetchMoviesAction)
    yield takeLatest(FETCH_MOVIE_GENRE, fetchMoviesGenre)
    yield takeEvery(FETCH_MOVIE_TOP_RATED, fetchTopRatedMovies)
    yield takeEvery(FETCH_GENRE_LIST, fetchGenreLists)
    yield takeEvery(FETCH_MOVIE_POPULAR, fetchPopularLists)
}
