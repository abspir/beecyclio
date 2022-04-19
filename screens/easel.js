import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';

import axios from 'axios';

const { height, width } = Dimensions.get('window');

const Easel = ({ navigation }) => {
    
    let [painting, setPainting] = useState(navigation.getParam('painting'));
    
    const testFunction = () => {
        axios.post('/.netlify/functions/hello', {
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
    return (
        <>
            <Image source={{ uri: painting, isStatic:true }}
            style={{ width, height }}/>
            <Button title="Test" onPress={testFunction} />
        </>
    )
}

export default Easel;
