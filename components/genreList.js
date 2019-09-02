import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { Container, Header, Right, Card, CardItem, Body, Left, Content, ListItem, Spinner, Text, Icon, Title } from 'native-base'
import Swiper from 'react-native-swiper'
import { withNavigation } from 'react-navigation';
import DaftarMovieSaga from './daftarMovieSaga'
import { connect } from 'react-redux'
import DeckList from './deckList'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const GenreList = ({ listMovies, navigation }) => {

    return (
        <Container>
            <Header hasTabs >
                <Body>
                    <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="#FB8C00">
                        <Icon type="MaterialIcons" name="arrow-back" style={{ fontSize: 30, color: 'white' }} />
                    </TouchableHighlight>
                </Body>
                <Right />
            </Header>
            <DaftarMovieSaga data={listMovies} />
        </Container >
    )
}

const mapStateToProps = state => {
    return {
        listMovies: state ? state.moviesByGenre : [],
    };
};


const GenreListContainer = connect(
    mapStateToProps,
    null
)(withNavigation(GenreList));
export default GenreListContainer;
