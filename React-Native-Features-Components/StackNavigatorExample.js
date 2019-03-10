import React, { Component } from 'react';
import { Button, Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import { Entypo } from '@expo/vector-icons'
import {
    createStackNavigator,
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
        console.log(this.props)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: 35 }}>
                    This is home screen and user name is {' '}
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
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>
                        About Us
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
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: 'brown', fontSize: 35 }}>
                    This is ContactUs screen
               </Text>

                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back"
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


const StackNavigatorExample = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            params: { username: 'aamir' },
            navigationOptions: {
                title: "WELCOME SCREEN"
            }
        },
        About: {
            screen: AboutUs,
            navigationOptions: {
                title: "ABOUT US",
                headerBackImage: () => <Entypo name='back' size={30} color="blue" />,
            }
        },
        Contact: {
            screen: ContactUs,
            navigationOptions: {
                title: "CONTACT US",
            }
        },
    },
    {
        //*****************************************************************
        // further properties are listed on the following link
        //https://reactnavigation.org/docs/en/stack-navigator.html
        //*****************************************************************
        initialRouteName: "Home",
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
export default StackNavigationExample = createAppContainer(StackNavigatorExample);
