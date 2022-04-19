import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import styled from 'styled-components/native';

import Home from "../screens/home";
import CameraComponent from "../screens/camera";
import Easel from "../screens/easel";

const Button = styled.Button`
`;

const handleHeaderRightClick = () => {
    console.log('right click');
    document.dispatchEvent(new CustomEvent('sendBase64ImageToServer'));
}

const screens = {
    Home: {
        screen: Home,
        navigationOptions: 
        {
            headerShown: false
        }
    },
    Camera: {
        screen: CameraComponent,
        navigationOptions: 
        {
            headerShown: false
        }
    },
    Easel : {
        screen: Easel,
        navigationOptions: {
            title: "Captured Image",
            headerRight: (route)=> <Button title="Send" onPress={handleHeaderRightClick} />,
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);