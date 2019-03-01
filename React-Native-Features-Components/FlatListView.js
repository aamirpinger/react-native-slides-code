import React from 'react';
import { Text, View, FlatList } from 'react-native'

function FlatListView() {
    const names = [
        { name: 'aamir1' },
        { name: 'pinger' },
        { name: 'afzal' },
        { name: 'qadir' },
        { name: 'aslam' },
        { name: 'qassim' },
        { name: 'idress' },
        { name: 'irfan' },
        { name: 'muneed' },
        { name: 'zia' },
        { name: 'imran' },
        { name: 'fazil' },
        { name: 'ali' },
        { name: 'aamir' },
        { name: 'pinger' },
        { name: 'afzal' },
        { name: 'qadir' },
        { name: 'aslam' },
        { name: 'qassim' },
        { name: 'idress' },
        { name: 'irfan' },
        { name: 'muneed' },
        { name: 'zia' },
        { name: 'imran' },
        { name: 'fazil' },
        { name: 'ali' },
        { name: 'qadir' },
        { name: 'aslam' },
        { name: 'qassim' },
        { name: 'idress' },
        { name: 'irfan' },
        { name: 'muneed' },
        { name: 'zia' },
        { name: 'imran' },
        { name: 'fazil' },
        { name: 'ali' },

    ]

    return (
        <View>
            <FlatList
                data={names}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    console.log(item.name)
                    return (<Text>{item.name}</Text>)
                }}
            />
        </View>
    )
}

export default FlatListView