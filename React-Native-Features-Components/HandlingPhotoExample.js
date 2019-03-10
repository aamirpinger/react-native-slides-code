import React, { Component } from 'react';
import {
    CameraRoll,
    ImageEditor,
    Image,
    View,
    Button,
} from 'react-native'
import { ImagePicker, Permissions } from 'expo'

class HandlingPhotoExample extends Component {
    state = {
        imgSrc: null
    }

    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
            .then(({ status }) => {
                console.log(status[0], "status", status[1], "status_roll")
                if (status !== 'granted') {
                    alert('Hey! You might want to enable notifications for my app, they are good.');
                }
            })

    }

    captureImageHandler = () => {
        const options = {
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        }
        ImagePicker.launchCameraAsync(options)
            .then((imageData) => {
                console.log("camera launched successful")
                if (imageData.cancelled) {
                    return
                }
                CameraRoll.saveToCameraRoll(imageData.uri)
                    .then(val => console.log(val, "Image saved!"))
                    .catch(e => console.log(e, "error saving image."))
            })
            .catch((e) => console.log(e))
    }


    selectImage = () => {

        ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [2, 2],
        }).then((imageData) => {
            if (imageData.cancelled) {
                return
            }

            ImageEditor.cropImage(
                imageData.uri,
                {
                    offset: { x: 0, y: 0 },
                    size: { width: imageData.width, height: imageData.height },
                    displaySize: { width: 50, height: 50 },
                    resizeMode: 'contain'
                },
                (uri) => this.setState({ imgSrc: uri }),
                (e) => console.log("error occured", e)
            )
        })
    }


    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center',
            }}>
                {
                    (this.state.imgSrc) &&
                    <Image
                        source={{
                            uri: this.state.imgSrc
                        }}
                        style={{
                            margin: 30,
                            resizeMode: 'contain',
                            width: 200,
                            height: 200,
                        }} />
                }
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button
                        title="Open gallary"
                        onPress={this.selectImage}
                        style={{ margin: 30 }} />

                    <Button
                        title="Open camera."
                        onPress={this.captureImageHandler} />

                </View>
            </View>
        );
    }
}

export default HandlingPhotoExample;