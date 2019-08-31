import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import headerTab from './headerTab';
import genreList from '../components/genreList'


const Main = createStackNavigator({
    Home: headerTab,
    ListDetail: genreList
},
    {
        initialRouteName: "Home",
        headerMode: 'none'
    }
);

export default createAppContainer(Main);