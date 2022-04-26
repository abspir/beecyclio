import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import closecamera from '../images/close_camera.svg';
import flipcamera from '../images/flip_camera.svg';
import circlecamera from '../images/circle_camera.svg';

const CameraComponent = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const navigateHome = () => { navigation.navigate('Home'); }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();

            setHasPermission(status === 'granted');
        })();
    }, []);

    const View = styled.View``;

    if (hasPermission === null) {
        return <View />;
    }

    const Text = styled.Text``;

    const Image = styled.Image`

    `;

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const onCameraReady = (prop) => {
        // console.log(prop);
    }

    let cameraReference = undefined;

    const setCameraReference = (ref) => {
        cameraReference = ref;
    };

    let snap = async () => {
        if (cameraReference) {
            let photo = await cameraReference.takePictureAsync();
            navigation.navigate('Easel', { painting: photo.base64 });
        }
    }

    const TouchableOpacity = styled.TouchableOpacity``;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        camera: {
            flex: 1
        },
        buttonContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
        },
        buttonWrapperTop: {
            flex: 0.1,
            alignSelf: 'flex-start',
            alignItems: 'center',
        },
        buttonWrapperBottom: {
            flex: 0.1,
            alignSelf: 'flex-end',
            alignItems: 'center',
            marginBottom: '2rem'
        }
    });

    return (
        <>
            <View style={styles.container}>
                <Camera ref={setCameraReference}
                    style={styles.camera} type={type} onCameraReady={onCameraReady('Camera Ready!')}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonWrapperTop}>
                            <TouchableOpacity
                                onPress={navigateHome}>
                                <img src={closecamera} alt="close" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonWrapperBottom}>
                            <TouchableOpacity
                                onPress={snap}>
                                <img src={circlecamera} alt="circle" style={{ width: '5.5rem' }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonWrapperTop}>
                            <TouchableOpacity
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <img src={flipcamera} alt="flip" />
                            </TouchableOpacity>

                        </View>

                    </View>
                </Camera>
            </View>
        </>
    )
};

export default CameraComponent;
