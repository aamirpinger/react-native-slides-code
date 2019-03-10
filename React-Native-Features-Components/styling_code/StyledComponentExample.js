import React, { Component } from 'react';
import styled from 'styled-components/native'
import { Text, TouchableOpacity, } from 'react-native'

// **********************************************************
//Don't forget to run on commnad prompt and restart you app
//
//      $ npm install styled-components --save 
//
// **********************************************************

const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    background-color: pink;
`
const StyledText = styled.Text`
    color: red;
    font-size: 16px; 
    font-weight: bold;
`
const StyledTouchableHighlight = styled.TouchableHighlight`
    background-color: #b5651d;
    width: 300px;
    border: 2px;
    border-color: brown;
    align-items: center;
    justify-content: center;
`

const StyledText2 = styled.Text`
    color: white;
    font-size: 25px; 
    font-style: italic;
`
export default class StyledComponentExample extends Component {
    render() {
        return (
            <StyledView>

                <StyledText>
                    hi there! this is style text{'\n'}{'\n'}
                </StyledText>

                <Text>
                    Normal Text{'\n'}{'\n'}
                </Text>

                <TouchableOpacity style={{ borderWidth: 1, width: 180, backgroundColor: 'white', }}>
                    <StyledText>Button text with style text...</StyledText>
                </TouchableOpacity>

                <StyledTouchableHighlight onPress={() => alert("Pressed")}>
                    <StyledText2>
                        StyledTouchableHighlight
                    </StyledText2>
                </StyledTouchableHighlight>

            </StyledView>
        );
    }
}
