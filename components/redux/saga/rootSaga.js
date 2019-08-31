import { call, all } from 'redux-saga/effects'
import { watchFetchMovies, watchFetchMoviesAction } from './movieSaga'

export default function* rootSaga() {
    yield call(watchFetchMovies)
}