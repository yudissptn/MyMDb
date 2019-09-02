import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    Text,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Button, Toast, DeckSwiper, Thumbnail, Icon } from 'native-base'
import { connect } from 'react-redux'
import { insertToFavorite } from './redux/action'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const DeckList = ({ data, onInsertMovie, favMovie }) => {



    let addtoFav = (movies) => {
        onInsertMovie(movies);
        Toast.show({
            text: 'Added to Favorite',
            buttonText: 'Okay'
        })
    }

    let deckData = (data) => {
        return (
            <View>
                <DeckSwiper
                    dataSource={data}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>{item.title}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{ height: 300, flex: 1 }} source={{ uri: 'https://image.tmdb.org/t/p/w300' + item.backdrop_path }} />
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                <Text>{item.title}</Text>
                            </CardItem>
                        </Card>
                    }
                    renderBottom={item => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
    return deckData(favMovie)

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
