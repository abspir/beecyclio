import React, {useState} from 'react';
import {Image, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');


const Easel = ({ navigation }) => {
    let [painting, setPainting] = useState(navigation.getParam('painting'));
    return (
        <>
            <Image source={{ uri: painting, isStatic:true }}
            style={{ width, height }}/>
        </>
    )
}

export default Easel;
