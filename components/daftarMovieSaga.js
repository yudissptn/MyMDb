import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Text, Button, Toast, H3, Icon } from 'native-base'
import { connect } from 'react-redux'
import { insertToFavorite, deleteFavorite } from './redux/action'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Daftar = ({ genreData, data, onDeleteMovie, favMovie }) => {

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
                    <CardItem bordered style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <H3>{list.title}</H3>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type="MaterialIcons" name="star" style={{ marginLeft: 16, marginRight: -15, color: '#fae13c', fontSize: 20 }} />
                            <Text style={{ color: '#a8a8a8', fontSize: 18, marginTop: -3 }}>{list.vote_average}</Text>
                        </View>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            style={{ height: 200, width: null, flex: 1 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        />
                    </CardItem>
                    <CardItem footer bordered button>
                    <View style={{ flexDirection: 'column'}}>
                            {genreCategories(list.genre_ids)}
                            <Text>{list.release_date}</Text>
                        <Button style={{ color: 'white', width: 100, borderRadius: 5, marginLeft: 280, paddingLeft: 10 }} onPress={() => deleteMovie(list)}><Text>Delete</Text></Button>
                       </View>
                    </CardItem>
                </Card>
            )
        }) :
            <H3 style={{ marginLeft: 110, marginTop: 250, color: '#a8a8a8' }} >Add movie to favorite</H3>
    }

    
    let genreCategories = (genre) => {
        let genFilter = [];
        genreData.forEach((list, key) => {
            genre.indexOf(list.id) >= 0 ? genFilter.push(list.name) : null
        })
        return <Text style={{ color: '#a8a8a8', marginBottom: 10 }}>{genFilter.join(', ')}</Text>
    }

    return (
        <Content>
            {listData(data)}
        </Content>
    )
}

const mapStateToProps = state => {
    return {
        favMovie: state ? state.favoriteList : [],
        genreData: state ? state.genreList : []
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
