import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ToastAndroid,
    FlatList,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Text, Content, H2 } from 'native-base';

import axios from 'axios'

import DaftarMovieSaga from '../components/daftarMovieSaga'
import { connect } from 'react-redux'
import {
    addMovieAction, fetchMovieAction2, fetchSuccessAction,
    fetchPopularMovie, fetchMovieGenre, fetchGenreList
} from '../components/redux/action'
import PosterCardList from '../components/posterCardList'

const Tab2 = ({ movies, topRated, genreData, onFetchMovies }) => {

    return (
        <Container>
            <Content>
                <H2 style={{ marginTop: 20 }}>Top Rated Movies All Time</H2>
                <PosterCardList
                    data={topRated}
                ></PosterCardList>
                <H2 style={{ marginTop: 20 }}>Browse Movies by Genre</H2>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <Button style={{ width: 150 }} light onPress={() => { onFetchMovies(99) }}><Text> Documentary </Text></Button>
                    <Button style={{ width: 150 }} light onPress={() => { onFetchMovies(18) }}><Text> Drama </Text></Button>
                    <Button style={{ width: 150 }} light onPress={() => { onFetchMovies(18) }}><Text> Drama </Text></Button>
                    <Button style={{ width: 150 }} light onPress={() => { onFetchMovies(18) }}><Text> Drama </Text></Button>
                </View>
                <DaftarMovieSaga
                    data={movies}>
                </DaftarMovieSaga>
            </Content>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        movies: state ? state.moviesByGenre : [],
        topRated: state ? state.popularMovies : [],
        genreData: state ? state.genreList : [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (genre) => {
            dispatch(fetchMovieGenre(genre));
        },
    }
}


const tab2Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab2);
export default tab2Container;