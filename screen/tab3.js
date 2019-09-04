import React, { useEffect } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import DaftarMovieSaga from '../components/daftarMovieSaga'
import { connect } from 'react-redux'
import { addMovieAction, fetchMovieAction, fetchPopularMovie, fetchFailedAction } from '../components/redux/action'
import { Button } from 'react-native'
import PosterCardList from '../components/posterCardList'
import DeckList from '../components/deckList'


const Tab3 = ({ favList, onFetchMovies }) => {

    return (
        <Container>
            <DaftarMovieSaga
                data={favList}
            ></DaftarMovieSaga>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        favList: state ? state.favoriteList : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => {
            dispatch(fetchPopularMovie());
        },
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        }
    }
}


const tab3Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab3);
export default tab3Container;

