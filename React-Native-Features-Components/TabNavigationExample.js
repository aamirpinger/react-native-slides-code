import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native'


import { Feather } from '@expo/vector-icons'
import {
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
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
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: 35 }}>
                    This is home screen
               </Text>
            </View>
        );
    }
}


HomeScreen.navigationOption = {
    tabBarIcon: () => <Feather name='home' size={30} color="blue" />,
    tabBarLabel: 'Settings!',
}


class ContactUs extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: 'brown', fontSize: 35 }}>
                    This is ContactUs screen
               </Text>
            </View>
        );
    }
}

class AboutUs extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 35 }}>
                    This is AboutUs screen
               </Text>
            </View>
        );
    }
}


//***************************************************/
// Options to try below are createBottomTabNavigator 
// and createMaterialTopTabNavigator
//***************************************************/


const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: () => <Feather name='home' size={25} color="blue" />
            }
        },
        About: {
            screen: AboutUs,
            navigationOptions: {
                tabBarIcon: () => <Feather name='info' size={25} color="blue" />,
            }
        },
        Contact: {
            screen: ContactUs,
            navigationOptions: {
                tabBarIcon: () => <Feather name='mail' size={25} color="blue" />,
            }
        },
    },
    {
        //*****************************************************************
        // further properties are listed on the following link
        //https://reactnavigation.org/docs/en/material-top-tab-navigator.html
        //*****************************************************************
        initialRouteName: "Contact",
        // change following with top / bottom
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 14,
                color: 'black',
            },
            tabStyle: {
                width: 100,

            },
            style: {
                backgroundColor: 'silver',
                borderRadius: 10,
            },
            indicatorStyle: {
                backgroundColor: 'orange',
            }
        },
        order: ['About', 'Contact', 'Home'],
    },


);

export default TabNavigationExample = createAppContainer(TabNavigator);
