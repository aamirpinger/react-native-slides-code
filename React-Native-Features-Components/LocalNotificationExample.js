import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Keyboard,
    Platform
} from 'react-native';
import {
    Constants,
    Notifications,
    Permissions
} from 'expo';

export default class LocalNotificationExample extends Component {
    onSubmit(e) {
        Keyboard.dismiss();

        const localNotification = {
            title: 'Local Notification',
            body: 'This is the example of local notification',
            ios: { sound: true, },
            android: {
                channelId: 'local-reminder',
                color: 'purple',
            }
        };

        const schedulingOptions = {
            time: (new Date()).getTime() + (Number(e.nativeEvent.text) * 1000),
            repeat: 'minute'  //'minute', 'hour', 'day', 'week', 'month', or 'year'.
        }

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );
    }

    handleNotification() {
        // it is not a proper way as it might print unwanted 
        // warning along with the provided msg
        console.warn('On screen notification example');

    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('local-reminder', {
                name: 'Local Reminder',
                sound: true,
                vibrate: true,
                priority: 'max',
            });
        }


        //***************************************************************
        // this following code can be used to check if app has already a
        // permission or not
        //***************************************************************
        //
        // Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS)
        //     .then(({ status }) => {
        //         console.log(JSON.stringify(status) + " SYSTEM_BRIGHTNESS get status")
        //     })
        //
        //***************************************************************


        // We need to ask for Notification permissions 
        Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                console.log(JSON.stringify(status) + " NOTIFICATIONS")
                if (Constants.isDevice && status === 'granted') {
                    console.log('Notification permissions granted.')
                }

                // If we want to do something with the notification when the app
                // is active, we need to listen to notification events and 
                // handle them in a callback
                Notifications.addListener(this.handleNotification);

            })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', }}>
                    Please enter time in seconds and press enter
                </Text>
                <TextInput
                    onSubmitEditing={this.onSubmit}
                    placeholder={'time in sec'}
                    style={{
                        borderWidth: 1,
                        width: 150,
                    }}
                />
            </View>
        );
    }
};