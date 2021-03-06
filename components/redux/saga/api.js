
const thisYearTop = 'https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&primary_release_year=2019&sort_by=vote_average.desc&vote_count.gte=1000'
const popular = 'https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&sort_by=popularity.desc'
const topRated = 'https://api.themoviedb.org/3/discover/movie?api_key=ab953ab4e46ff436e67d4863d6c24715&sort_by=vote_average.desc&vote_count.gte=10000'
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

function* getMoviesTopRatedApi() {
    const response = yield fetch(topRated,
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

function* getPopularApi() {
    const response = yield fetch(popular,
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

function* getThisYearTopApi() {
    const response = yield fetch(thisYearTop,
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
    getMoviesTopRatedApi,
    getListGenreApi,
    getPopularApi,
    getThisYearTopApi
}

