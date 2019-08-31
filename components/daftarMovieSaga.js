import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    View,
    Text,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Card, CardItem, Body, Left, Content, ListItem, Spinner } from 'native-base'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Daftar = ({ data }) => {

    let listData = () => {
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
                    <CardItem footer bordered button onPress={() => alert("This is Card Footer")}>
                        <Text>{list.release_date}</Text>
                    </CardItem>
                </Card>
            )
        }) :
            <Spinner color='blue' />
    }
    return (
        <Content>
            {listData()}
        </Content>
    )
}



export default Daftar