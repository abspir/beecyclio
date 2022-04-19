import React from 'react';
import styled from 'styled-components/native';
import { BrowserView, MobileView } from 'react-device-detect';
//import { View, Text, Button } from 'react-native';
import qrcode from "../images/qr-to-beecyclio.svg";
import honeycomb from '../images/honeycomb.svg';
import CameraImage from '../images/mobile_photos.svg';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const HomeTitle = styled.Text`
    font-size: 1.5rem;
    color: #373737;
`;
const View = styled.View`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
	height: 100%;
	background-size: 68px;
    background-color: rgb(255, 255, 255);
    background-positon: center;
`;

/* ... inside the render or return of your component ... */

const Button = styled.Button`
    
`;

const Home = ({ navigation }) => {

    // const testFunction = async () => {
    //     try 
    //     {
    //         let res = await axios.get('/.netlify/functions/hello');
    //         console.log(res);
    //     }
    //     catch (err)
    //     {
    //         console.log(err);
    //     }
    // }

    // const testFunction = async () => {
    //     axios.get('/.netlify/functions/hello')
    //     .then(function (res) {
    //         // handle success
    //         console.log(res);
    //     })
    //     .catch(function (err) {
    //         // handle error
    //         console.log(err);
    //     })
    // }

    let imageDataBase64 = 'Test String';

    const testFunction = (req) => {
        axios.post('/.netlify/functions/hello', {
            imageData: req
        })
        .then(function (res) {
            // handle success
            console.log(res);
        })
        .catch(function (err) {
            // handle error
            console.log(err);
        })
    }

    const pressHandler = () => {
        navigation.navigate('Camera');
    };

    return (
        <>
            <View style={{ backgroundImage: `url(${honeycomb})` }}>
                <HomeTitle>Bzz.. Bzz.. Welcome to Beecyclio</HomeTitle>

                <Button title="Scan" onPress={pressHandler} />

                <Button title="Test" onPress={testFunction(imageDataBase64)} />

                <BrowserView>
                    <View>
                        <img style={{ width: "auto", maxWidth: "300px" }} alt="qrcode" src={qrcode} />
                    </View>
                </BrowserView>
                <MobileView>
                    Mobile View
                </MobileView>
            </View>
            <StatusBar style="auto" />
        </>
    )
};

export default Home;
