import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Text, Button, Toast, H3 } from 'native-base'
import { connect } from 'react-redux'
import { insertToFavorite, deleteFavorite } from './redux/action'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Daftar = ({ data, onDeleteMovie, favMovie }) => {

    let deleteMovie = (movies) => {
        onDeleteMovie(movies);
        Toast.show({
            text: 'Renoved from list',
            buttonText: 'Okay'
        })
    }

    let listData = (data) => {
        return data.length > 0 ? data.map((list, key) => {
            return (
                <Card style={{ width: screenWidth }}>
                    <CardItem header bordered>
                        <H3>{list.title}</H3>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            style={{ height: 200, width: null, flex: 1 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        />
                    </CardItem>
                    <CardItem footer bordered button>
                        <Text>{list.release_date}</Text>
                        <Button style={{ color: 'white', width: 100, borderRadius: 5, marginLeft: 200, paddingLeft: 10 }} onPress={() => deleteMovie(list)}><Text>Delete</Text></Button>
                    </CardItem>
                </Card>
            )
        }) :
            <H3 style={{ marginLeft: 110, marginTop: 250, color: '#a8a8a8' }} >Add movie to favorite</H3>
    }
    return (
        <Content>
            {listData(data)}
        </Content>
    )
}

const mapStateToProps = state => {
    return {
        favMovie: state ? state.favoriteList : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteMovie: (movies) => {
            dispatch(deleteFavorite(movies));
        },
    }
}


const DaftarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Daftar);
export default DaftarContainer;
