import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground,
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner, Text, Icon } from 'native-base'
import Swiper from 'react-native-swiper'
import AddButton from './addButton'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const PosterCardList = ({ data }) => {

    let listData = () => {
        return data ? data.map((list, key) => {
            return (
                <Card style={{ width: 150, marginRight: 5, backgroundColor: '#292d33', borderRadius: 5, padding: 5 }}>
                    <View style={{ height: 180 }}>
                        <ImageBackground
                            style={{ height: 180 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w154' + list.poster_path }}
                        >
                            <AddButton movieDetail={list} fromLeft={-15} />
                        </ImageBackground>
                    </View>
                    <Text style={{ color: 'white' }}>{list.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon type="MaterialIcons" name="star" style={{ color: '#fae13c', fontSize: 15 }} />
                        <Text style={{ color: '#a8a8a8', fontSize: 13 }}>{list.vote_average}</Text>
                    </View>
                </Card>
            )
        }) :
            <Spinner color='blue' />
    }
    return (
        <Content>
            <View>
                <ScrollView horizontal scrollEventThrottle={10}>
                    {listData()}
                </ScrollView>
            </View>
        </Content>
    )
}



export default PosterCardList