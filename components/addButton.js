import React, { useEffect } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Toast } from 'native-base';
import { View, TouchableOpacity } from 'react-native'
import DaftarMovieSaga from '../components/daftarMovieSaga'
import { connect } from 'react-redux'
import { addMovieAction, fetchMovieAction, insertToFavorite, fetchFailedAction } from '../components/redux/action'
import { Button } from 'react-native'
import PosterCardList from '../components/posterCardList'
import DeckList from '../components/deckList'


const AddButton = ({ favMovie, movieDetail, fromLeft, onInsertMovie }) => {
    
    let addtoFav = (movies) => {
        onInsertMovie(movies);
        Toast.show({
            text: 'Added to Favorite',
            buttonText: 'Okay'
        })
    }

    return (
        <View style={{overflow: 'hidden', height: 100, width: 50}}>
            <TouchableOpacity onPress={() => favMovie.indexOf(movieDetail) !== -1 ? Toast.show({ text: 'Already on the list', buttonText: 'Okay' }) : addtoFav(movieDetail)}>
                <View>
                <Icon
                    type="MaterialIcons"
                    name="bookmark"
                    style={{ opacity: 0.8, marginTop: -10, fontSize: 60, color: 'black', marginLeft: fromLeft }} />
            <Icon type="MaterialIcons" name="add" style={{ opacity: 0.6, marginTop: -50, fontSize: 30, color: 'white', marginLeft: fromLeft + 15 }} />
            </View>
            </TouchableOpacity>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        favMovie: state ? state.favoriteList : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInsertMovie: (movie) => {
            dispatch(insertToFavorite(movie));
        },
    }
}


const AddButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);
export default AddButtonContainer;

