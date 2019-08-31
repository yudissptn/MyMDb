import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';

const Daftar = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: item.thumbnailUrl }}
                    />
                    <Text>{item.title}</Text>
                </View>
            )}
        />
    )
}

export default Daftar