import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Text, Icon, Button } from 'native-base'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import {
    addMovieAction, fetchMovieAction2, fetchSuccessAction,
    fetchPopularMovie, fetchMovieGenre, fetchGenreList
} from '../components/redux/action'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const GenreButton = ({ genreData, onFetchMovies, nav }) => {

    let navDispatch = (genreId) => {
        onFetchMovies(Number(genreId));
        nav.navigate('ListDetail', { genId: genreId });
    }

    let listData = () => {
        return genreData ? genreData.map((list, key) => {
            return (
                <Button style={{ width: 150, marginTop: 10 }} light onPress={() => { navDispatch(list.id) }}><Text>{list.name}</Text></Button>
            )
        }) :
            <Spinner color='blue' />
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {listData()}
        </View>
    )
}


const mapStateToProps = state => {
    return {
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


const GenreButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreButton);
export default GenreButtonContainer;