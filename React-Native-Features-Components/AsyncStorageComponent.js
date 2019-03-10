import React, { Component } from 'react';
import {
    AsyncStorage,
    Button,
    View,
    Text,
    TextInput
} from 'react-native';

export default class asyncStorageComponent extends Component {
    state = {
        txt_fname: '',
        txt_lname: ''
    };

    handleChange = (e, txtbox_name) => {
        AsyncStorage.setItem(txtbox_name, e.nativeEvent.text, (err) => {
            (err) && console.log(err, "error")
        })
        this.setState({ [txtbox_name]: e.nativeEvent.text })
    }

    componentDidMount() {
        AsyncStorage.getAllKeys()
            .then((v) => {
                AsyncStorage.multiGet((v), (err, data) => {
                    if (!err) {
                        data.map((rec) => {
                            this.setState((ps) => (
                                {
                                    [rec[0]]: rec[1]
                                }
                            ))
                        })
                    }
                    else {
                        console.log("error retreiving data")
                    }
                })
            })
    }
    render() {
        return (
            <View>
                <TextInput
                    name="txt_fname"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChange={(event, name) => this.handleChange(event, 'txt_fname')}
                    placeholder='enter your first name here'
                    value={this.state.txt_fname}
                />
                <Text>
                    {this.state.txt_fname}
                </Text>
                <TextInput
                    name="txt_lname"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChange={(event, name) => this.handleChange(event, 'txt_lname')}
                    placeholder='enter your last name here'
                    value={this.state.txt_lname}
                />
                <Text>
                    {this.state.txt_lname}
                </Text>
                <Button title="get date" onPress={() => {
                    AsyncStorage.getItem("txt_fname", (err, result) => console.log(err, "this is error", result, "this is result"))
                        .then((val) => console.log(val, "value"))

                }}
                />
            </View>
        );
    }
}

