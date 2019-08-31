import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import headerTab from './headerTab';
// import Performance from './containers/Performance';

// const MainNavigator = createStackNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: {
//                 header: null,
//             }
//         },
//         Create: {
//             screen: CreateCase,
//             navigationOptions: {
//                 title: "Generate Case",
//             }
//         },
//     },
//     {
//         initialRouteName: "Home"
//     }
// );

const Main = createStackNavigator({
    Home: { screen: headerTab },
},
    {
        initialRouteName: "Home",
        headerMode: 'none'
    }
);

export default createAppContainer(Main);