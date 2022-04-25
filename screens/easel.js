import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import axios, { AxiosRequestConfig } from 'axios';
//import AxiosMockAdapter from 'axios-mock-adapter';

const { height, width } = Dimensions.get('window');

const Button = styled.Button`
    
`;

const Easel = ({ navigation }) => {

    const [painting] = useState(navigation.getParam('painting'));
    
    const navigateHome = () => { navigation.navigate('Home'); }
    const navigateCamera = () => { navigation.navigate('Camera'); }

    // This sets the mock adapter on the default instance
    //const mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
    
    let [spinner, setSpinner] = useState(false);

    const AWSRekognition = () => {

        console.log('aws');
        
        // Mock GET request to /users when param `searchText` is 'John'
        // arguments for reply are (status, data, headers)
        // mock.onGet("/user", {
        //     params: { searchText: "John" }
        // }).reply(200, {
        //     users: [{ id: 1, name: "John Smith" }],
        // });

        // setSpinner(true);

        // axios
        // .get("/user", { params: { searchText: "John" } })
        // .then(function (response) {
        //     setSpinner(false);
        //     showResult(response);
        // });
        showResult("mock AWS Response");
        // axios.post('/.netlify/functions/AWS_DetectCustomLabels', {
        //     imageData: painting
        // })
        // .then(function (res) {
        //     // handle success
        //     console.log(res);
        //     showResult(res);
        // })
        // .catch(function (err) {
        //     // handle error
        //     console.log(err);
        // })
    }

    const showResult = (res) => {
        console.log('navigate to result');
        navigation.navigate('Result', { response: res });
    };

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
        }
    });


    return (
        <>
            <Background style={{ backgroundImage: `url(${painting})` }}>
                <View style={styles.container}>
                    <View style={styles.outer}>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapperTop}>
                                <Button onPress={navigateCamera} title="Try Again"/>
                            </View>

                            <View style={styles.buttonWrapperBottom}>
                                <Button onPress={AWSRekognition} title="Send"/>
                            </View>

                            <View style={styles.buttonWrapperTop}>
                                <Button onPress={navigateHome} title="Home"/>
                            </View>

                        </View>
                    </View>
                </View>
            </Background>
        </>
    )
};



export default Easel;

