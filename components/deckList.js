import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    FlatList,
    Image,
    Dimensions,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Button, Toast, DeckSwiper, Thumbnail, Icon, Text, H2 } from 'native-base'
import { connect } from 'react-redux'
import { insertToFavorite } from './redux/action'
import Swiper from 'react-native-swiper'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const DeckList = ({ listCopy, onInsertMovie, favMovie, data }) => {

    let addtoFav = (movies) => {
        onInsertMovie(movies);
        Toast.show({
            text: 'Added to Favorite',
            buttonText: 'Okay'
        })
    }

    let staticData = (list) => {
        return (
            <View style={{ bottom: 100, height: 300, width: screenWidth }}>
                <H2 style={{ marginBottom: 20 }}>{list.title}</H2>
                <Text numberOfLines={5}>{list.overview}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon type="MaterialIcons" name="star" style={{ color: '#fae13c', fontSize: 20 }} />
                    <Text style={{ color: '#a8a8a8', fontSize: 18 }}>{list.vote_average}</Text>
                </View>
            </View>
        )
    }

    let deckData = (movies) => {
        return movies.length > 0 ? movies.map((list, key) => {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginBottom: 250,
                    height: 850
                }} title={staticData(list)}>
                    <ImageBackground
                        style={{ width: screenWidth, height: 250 }}
                        source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        blurRadius={1}>
                        <Image
                            style={{ height: 170, width: 120, marginLeft: 145, marginTop: 50 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.poster_path }}
                        />
                    </ImageBackground>
                </View>
            )
        }) :
            <Spinner color='blue' />
    }

    let renderPagination = (index, total, context) => {
        listCopy = data[index]
    }

    return (
        <Content>
            <View style={{ flex: 1 }}>
                <Swiper
                    height={500}
                    renderPagination={renderPagination}
                    loop>
                    {deckData(data)}
                </Swiper>
                <Button
                    onPress={() => favMovie.indexOf(listCopy) !== -1 ? Toast.show({ text: 'Already on the list', buttonText: 'Okay' }) : addtoFav(listCopy)}
                    style={{ width: 200, borderRadius: 5 }}
                ><Text>Add to Fav</Text></Button>
                <View><Text> </Text></View>
            </View>
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


const DeckListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckList);
export default DeckListContainer;
