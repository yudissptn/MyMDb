import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Button,
    ToastAndroid,
    FlatList,
    ImageBackground,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Spinner, Content, Card, CardItem, Text, H2, Icon } from 'native-base';
import Swiper from 'react-native-swiper'
import AddButton from '../components/addButton'

import { connect } from 'react-redux'
import { addMovieAction, fetchMovieAction2, fetchTopRatedMovie, fetchGenreList, fetchPopularList } from '../components/redux/action'


const Tab1 = ({ movies, popMovies, onFetchMovies, onFetchTopRatedMovies, onFetchGenreList, onFetchPopular }) => {

    useEffect(() => {
        onFetchMovies();
        onFetchTopRatedMovies();
        onFetchGenreList();
        onFetchPopular();
    }, []);

    let swiperList = () => {
        return movies ? movies.map((list, key) => {
            return (
                <View style={{ flex: 1, width: 500 }}>
                    <View style={{ flex: 1, width: 500 }} >
                        <ImageBackground
                            style={{ height: 200, width: 500, flex: 1 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.backdrop_path }}
                        >
                        <AddButton movieDetail={list} fromLeft={0}/>
                        </ImageBackground>
                    </View>
                    <View style={{ flex: 0.3, width: 100, height: 140, zIndex: 3, position: 'relative', bottom: 130, left: 10 }}>
                        <Image
                            style={{ height: 140, width: 100 }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w300' + list.poster_path }}
                        />
                    </View>
                    <View style={{ position: 'relative', bottom: 40, left: 40 }}>
                        <Text>{list.title}</Text>
                    </View>
                </View>
            )
        }) :
            <Spinner color='blue' />
    }

    return (
        <Container>
            <Content>
                <H2 style={{ marginTop: 20 }}>Top Trending This Week</H2>
                <Swiper autoplay={true} height={300} showsPagination={false}>
                    {swiperList()}
                </Swiper>
                <H2>Most Popular Movies</H2>
                {popMovies? 
                <View style={{ flex: 1, width: 500 }}>
                    <ImageBackground
                        style={{ height: 200, width: 500, flex: 1 }}
                        source={{ uri: 'https://image.tmdb.org/t/p/w300' + popMovies.backdrop_path }}
                    >
                    <AddButton movieDetail={popMovies} fromLeft={0}/>
                    </ImageBackground>
                    <Text>{popMovies.title}</Text>
                </View>
                : <Spinner color='blue' />}
                <H2 style={{ marginTop: 20 }}>Most Popular Movies</H2>
                <View style={{ flex: 1, width: 500 }}>
                    <Image
                        style={{ height: 260, width: 500, flex: 1 }}
                        source={{ uri: 'https://image.tmdb.org/t/p/w300/jFIXVCCGvS20mIFXqDAlVR5KXew.jpg' }}
                    />
                    <Text>劇場版 Fate／stay night [Heaven's Feel] II. lost butterfly</Text>
                </View>
            </Content>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        movies: state ? state.moviesAction : [],
        popMovies: state ? state.popularMovies[0] : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMovieAction2());
        },
        onFetchPopular: () => {
            dispatch(fetchPopularList());
        },
        onFetchTopRatedMovies: () => {
            dispatch(fetchTopRatedMovie());
        },
        onFetchGenreList: () => {
            dispatch(fetchGenreList());
        }

    }
}


const tab1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab1);
export default tab1Container;