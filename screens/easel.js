import React, { useState } from 'react';
import { ActivityIndicator, Image, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const { height, width } = Dimensions.get('window');

const Button = styled.Button`
    
`;

const Easel = ({ navigation }) => {

    const [painting] = useState(navigation.getParam('painting'));
    
    const navigateHome = () => { navigation.navigate('Home'); }
    const navigateCamera = () => { navigation.navigate('Camera'); }

    // This sets the mock adapter on the default instance
    const mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
    
    let [spinner, setSpinner] = useState(false);

    const showResult = (res) => {
        navigation.navigate('Result', { response: res });
    };

    const AWSRekognition = () => {
        
        mock.onGet("/.netlify/functions/AWS_DetectCustomLabels", {
            params: { "base64EncodedImage": painting}
        }).reply(200, { "CustomLabels": [{
            "Name": "Forest Certified",
            "Confidence": 87.34600067138672}]
        });

        setSpinner(true);

        axios
        .get("/.netlify/functions/AWS_DetectCustomLabels", { params: { base64EncodedImage: painting } })
        .then((response) => {
            setSpinner(false);
            mock.restore();
            showResult(response);
        });
    }

    const View = styled.View``;

    const Background = styled.View`
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        background-size: auto;
        background-color: rgb(255, 255, 255);
        background-position: center;
        background-repeat: no-repeat;
    `;

    const SimplePressableButton = styled.Text`
        font-size: 1.5rem;
        color: #fff;
        backdrop-filter: blur(4px);
        padding: 0px 10px 10px;
    `;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        outer: {
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
        },
        spinner: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none'
        }
    });


    return (
        <>
            <Background pointerEvents={spinner?'none':'auto'} style={{ backgroundColor: "#000", backgroundImage: `url(${painting})` }}>
                
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" animating={spinner} />
                </View>
                
                <View style={styles.container}>
                    <View style={styles.outer}>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapperTop}>
                                <SimplePressableButton onClick={navigateCamera}>Try Again</SimplePressableButton>
                                {/* <Button onPress={navigateCamera} title="Try Again"/> */}
                            </View>

                            <View style={styles.buttonWrapperBottom}>
                                {/* <Button onPress={AWSRekognition} title="Send"/> */}
                                <SimplePressableButton onClick={AWSRekognition}>Send</SimplePressableButton>
                            </View>

                            <View style={styles.buttonWrapperTop}>
                                {/* <Button onPress={navigateHome} title="Home"/> */}
                                <SimplePressableButton onClick={navigateHome}>Home</SimplePressableButton>
                            </View>

                        </View>
                    </View>
                </View>
            </Background>
        </>
    )
};



export default Easel;

