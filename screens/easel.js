import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const { height, width } = Dimensions.get('window');

const Button = styled.Button`
    
`;

const Easel = ({ navigation }) => {
    
    let [painting, setPainting] = useState(navigation.getParam('painting'));

    const testFunction = () => {
        axios.post('/.netlify/functions/AWS_DetectCustomLabels', {
            imageData: painting
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
    document.addEventListener('sendBase64ImageToServer', (e)=>{
        console.log('event heard')
        testFunction();
    });
    return (
        <>
            <Image source={{ uri: painting, isStatic:true }}
            style={{ width, height }}/>
            <StatusBar style="auto" />
        </>
    )
}

export default Easel;
