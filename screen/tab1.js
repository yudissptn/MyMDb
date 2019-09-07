import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Button,
    ToastAndroid,
    FlatList,
    ImageBackground,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Spinner, Content, Card, CardItem, Text, H2, H3, Icon, Footer } from 'native-base';
import Swiper from 'react-native-swiper'
import AddButton from '../components/addButton'

import { connect } from 'react-redux'
import { addMovieAction, fetchMovieAction2, fetchTopRatedMovie, fetchGenreList, fetchPopularList, fetchYearTopList } from '../components/redux/action'


const Tab1 = ({ genreName, genreData, movies, popMovies, topThisYear, onFetchTopThisYear, onFetchMovies, onFetchTopRatedMovies, onFetchGenreList, onFetchPopular }) => {

    useEffect(() => {
        onFetchMovies();
        onFetchTopRatedMovies();
        onFetchGenreList();
        onFetchPopular();
        onFetchTopThisYear();
    }, []);

    let swiperList = () => {
        return movies ? movies.map((list, key) => {
            return (
                <View style={{ flex: 1, width: 500 }}>
                    <View style={{ flex: 1, width: 500 }} >
                        <ImageBackground
                            style={{ height: 200, width: 500, flex: 1 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        >
                            <AddButton movieDetail={list} fromLeft={0} />
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flex: 0.3, width: 100, height: 140, zIndex: 3, position: 'relative', bottom: 40, left: 10 }}>
                            <Image
                                style={{ height: 140, width: 100 }}
                                source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.poster_path }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -30, marginTop: 50 }}>
                            <Icon type="MaterialIcons" name="star" style={{ color: '#fae13c', fontSize: 17 }} />
                            <Text style={{ color: '#a8a8a8', fontSize: 15 }}>{list.vote_average}</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative', bottom: 30, left: 40 }}>
                        <Text>{list.title}</Text>
                        {genreCategories(list.genre_ids)}
                    </View>
                </View>
            )
        }) :
            <Spinner color='blue' />
    }

    let genreCategories = (genre) => {
        let genFilter = [];
        genreData.forEach((list, key) => {
            genre.indexOf(list.id) >= 0 ? genFilter.push(list.name) : null
        })
        return <Text style={{ color: '#a8a8a8' }}>{genFilter.join(', ')}</Text>
    }

    let sharePaperTab1 = (movList) => {
        return (
            <View style={{ flex: 1, width: 400 }}>
                <ImageBackground
                    style={{ height: 200, width: 500, flex: 1 }}
                    source={{ uri: 'https://image.tmdb.org/t/p/w300' + movList.backdrop_path }}
                >
                    <AddButton movieDetail={movList} fromLeft={0} />
                </ImageBackground>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{movList.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon type="MaterialIcons" name="star" style={{ color: '#fae13c', fontSize: 15 }} />
                        <Text style={{ color: '#a8a8a8', fontSize: 13 }}>{movList.vote_average}</Text>
                    </View>
                </View>
                <Text>{genreData ? genreCategories(movList.genre_ids) : null}</Text>
            </View>

        )
    }

    return (
        <Container>
            <Content>
                <H2 style={{ marginTop: 20 }}>Top Trending This Week</H2>
                <Swiper autoplay={true} height={300} showsPagination={false}>
                    {swiperList()}
                </Swiper>
                <H2>Most Popular Movies</H2>
                {popMovies ?
                    sharePaperTab1(popMovies)
                    : <Spinner color='blue' />}
                <H2 style={{ marginTop: 20 }}>Top Rated This Year</H2>
                {topThisYear ?
                    sharePaperTab1(topThisYear)
                    : <Spinner color='blue' />}
                <Footer style={{ marginTop: 20 }}>
                    <Body>
                        <Text style={{ marginLeft: 20, marginTop: 5, color: '#a8a8a8' }} >This app built using themoviedb API</Text>
                    </Body>
                </Footer>
            </Content>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        movies: state ? state.moviesAction : [],
        popMovies: state ? state.popularMovies[0] : [],
        topThisYear: state ? state.yearTop[0] : [],
        genreData: state ? state.genreList : [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMovieAction2());
        },
        onFetchPopular: () => {
            dispatch(fetchPopularList());
        },
        onFetchTopRatedMovies: () => {
            dispatch(fetchTopRatedMovie());
        },
        onFetchTopThisYear: () => {
            dispatch(fetchYearTopList());
        },
        onFetchGenreList: () => {
            dispatch(fetchGenreList());
        }

    }
}


const tab1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab1);
export default tab1Container;