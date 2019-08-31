import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title, Right, Button } from 'native-base';

import Tab1 from '../screen/tab1';
import Tab2 from '../screen/tab2';
import Tab3 from '../screen/tab3';

export default class TabsScrollableExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs >
                    <Body>
                        <Title>MyMDb</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />} locked={true}>
                    <Tab heading="Home">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Recommendations">
                        <Tab2 navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Favourite">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}