import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'
import {
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';

// **********************************************************
//Don't forget to run on commnad prompt and restart you app
//
//      $ npm install react-navigation --save 
//
// **********************************************************


class HomeScreen extends Component {

    render() {
        const navigation = this.props.navigation
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: 35 }}>
                    "Drawer Navigator Example" This is home screen and user name is {' '}
                    <Text style={{
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'olive'
                    }}>
                        {navigation.getParam('username').toUpperCase()}
                    </Text>
                </Text>


                <TouchableHighlight
                    style={[{ backgroundColor: 'maroon', }, styles.button]}
                    onPress={() => navigation.openDrawer()}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Menu
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight
                    style={[{ backgroundColor: 'navy', }, styles.button]}
                    onPress={() => navigation.navigate('Contact')}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Contact Us
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}




class ContactUs extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: 'brown', fontSize: 35 }}>
                    This is ContactUs screen
               </Text>


                <TouchableHighlight
                    style={[{ backgroundColor: 'purple', }, styles.button]}
                    onPress={() => navigation.openDrawer()}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Menu
                    </Text>
                </TouchableHighlight>

                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back to Home"
                />
            </View>
        );
    }
}

class AboutUs extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 35 }}>
                    This is AboutUs screen
               </Text>


                <TouchableHighlight
                    style={[{ backgroundColor: 'navy', }, styles.button]}
                    onPress={() => navigation.navigate('Contact')}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Contact Us
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const DrawerNavigationExample = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            params: { username: 'aamir' },
            navigationOptions: {
                drawerLabel: "WELCOME SCREEN",
                drawerIcon: () => <Feather name='home' size={25} color="olive" />,
            }
        },
        About: {
            screen: AboutUs,
            navigationOptions: {
                drawerLabel: "ABOUT US",
                drawerIcon: () => <Feather name='info' size={25} color="olive" />,
            }
        },
        Contact: {
            screen: ContactUs,
            navigationOptions: {
                drawerLabel: "CONTACT US",
                drawerIcon: () => <Feather name='mail' size={25} color="olive" />,
            }
        },
    },
    {
        //*****************************************************************
        // further properties are listed on the following link
        //https://reactnavigation.org/docs/en/drawer-navigator.html
        //*****************************************************************
        initialRouteName: "Home",
        drawerBackgroundColor: 'yellow'
    },


);

const styles = StyleSheet.create({
    button: {
        width: 120,
        margin: 20,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
    }
})
export default DrawerNavigatorExample = createAppContainer(DrawerNavigationExample);
