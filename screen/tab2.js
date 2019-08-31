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
import PosterCardList from '../components/posterCardList'
import GenreButton from '../components/genreButton'

const Tab2 = ({ movies, topRated, navigation }) => {

    return (
        <Container>
            <Content>
                <H2 style={{ marginTop: 20 }}>Top Rated Movies All Time</H2>
                <PosterCardList
                    data={topRated}
                ></PosterCardList>
                <H2 style={{ marginTop: 20 }}>Browse Movies by Genre</H2>
                <GenreButton nav={navigation} />
            </Content>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        movies: state ? state.moviesByGenre : [],
        topRated: state ? state.popularMovies : [],
    };
};

const tab2Container = connect(
    mapStateToProps,
    null
)(Tab2);
export default tab2Container;