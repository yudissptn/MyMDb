import { dateNow } from '../../commonFunc'


const getDate = new Date();
const currentDate = dateNow(getDate);

const popularMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&sort_by=vote_average.desc&vote_count.gte=10000'
const urlMovies = 'https://api.themoviedb.org/3/trending/all/week?api_key=ab953ab4e46ff436e67d4863d6c24715'
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&language=en-US&page=1&primary_release_year=2019&with_genres=28'
const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ab953ab4e46ff436e67d4863d6c24715&language=en-US'
///discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22


function* getMoviesApi() {
    const response = yield fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json;charset=utf-8",
            "authorization": "Bearer 367ad6acc7c5e96a9b80a4e82ceca38b8a90db26"
        },
    });

    const movies = yield response.status === 200 ? response.json() : []
    return movies;
};

function* getMoviesActionApi() {
    const response = yield fetch(urlMovies, {
        method: 'GET',
        headers: {
            "content-type": "application/json;charset=utf-8",
            "authorization": "Bearer 367ad6acc7c5e96a9b80a4e82ceca38b8a90db26"
        },
    });

    const movies = yield response.status === 200 ? response.json() : []
    return movies;
};

function* getMoviesGenreApi(genre) {
    alert(genre)
    const response = yield fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&language=en-US&page=1&primary_release_year=2019&with_genres=${genre}`,
        {
            method: 'GET',
            headers: {
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer 367ad6acc7c5e96a9b80a4e82ceca38b8a90db26"
            },
        });

    const movies = yield response.status === 200 ? response.json() : []
    return movies;
};

function* getMoviesPopularApi() {
    const response = yield fetch(popularMovie,
        {
            method: 'GET',
            headers: {
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer 367ad6acc7c5e96a9b80a4e82ceca38b8a90db26"
            },
        });

    const movies = yield response.status === 200 ? response.json() : []
    return movies;
};

function* getListGenreApi() {
    const response = yield fetch(genreUrl,
        {
            method: 'GET',
            headers: {
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer 367ad6acc7c5e96a9b80a4e82ceca38b8a90db26"
            },
        });

    const movies = yield response.status === 200 ? response.json() : []
    return movies;
};

export const Api = {
    getMoviesApi,
    getMoviesActionApi,
    getMoviesGenreApi,
    getMoviesPopularApi,
    getListGenreApi
}

