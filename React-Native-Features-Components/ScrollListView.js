import React from 'react';
import { Text, View, ScrollView } from 'react-native'

function ScrollListView() {
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
            <Text numberOfLines={3}>
                Component that wraps platform ScrollView while providing integration with touch locking "responder" system.
                Keep in mind that ScrollViews must have a bounded height in order to work, since they contain
                unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height
                of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views
                have ofed height.
            </Text>
            <ScrollView>
                {
                    names.map((name) => <Text numberOfLines={2}>{name.name}</Text>)
                }
            </ScrollView>
        </View>
    )
}
export default ScrollListView
