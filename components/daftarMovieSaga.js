import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    Text,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Button, Toast } from 'native-base'
import { connect } from 'react-redux'
import { insertToFavorite } from './redux/action'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Daftar = ({ data, onInsertMovie, favMovie }) => {

    let addtoFav = (movies) => {
        onInsertMovie(movies);
        Toast.show({
            text: 'Added to Favorite',
            buttonText: 'Okay'
        })
    }

    let listData = (data) => {
        return data ? data.map((list, key) => {
            return (
                <Card style={{ width: screenWidth }}>
                    <CardItem header bordered>
                        <Text>{list.title}</Text>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            style={{ height: 200, width: null, flex: 1 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        />
                    </CardItem>
                    <CardItem footer bordered button>
                        <Text>{list.release_date}</Text>
                        <Button onPress={() => favMovie.indexOf(list) !== -1 ? Toast.show({ text: 'Already on the list', buttonText: 'Okay' }) : addtoFav(list)}><Text>Add to Fav</Text></Button>
                    </CardItem>
                </Card>
            )
        }) :
            <Spinner color='blue' />
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
        onInsertMovie: (movies) => {
            dispatch(insertToFavorite(movies));
        },
    }
}


const DaftarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Daftar);
export default DaftarContainer;
