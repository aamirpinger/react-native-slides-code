import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Permissions } from 'expo'


function clicked() {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status !== 'granted') {
                alert('You did not granted permission to the app!');
            }
        })
}

class PermissionsExample extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <MaterialIcons name='notifications' size={100} color="purple" onPress={() => clicked()} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    This is PermissionsExample example app,
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'red' }}>
                    click on a bell for Permission popup
                </Text>
            </View>
        );
    }
}

export default PermissionsExample;