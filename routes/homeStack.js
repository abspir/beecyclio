import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import styled from 'styled-components/native';

import Home from "../screens/home";
import CameraComponent from "../screens/camera";
import Easel from "../screens/easel";
import Result from "../screens/result";

const Button = styled.Button`
`;
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
            headerShown: false,
            title: "Captured Image"
        }
    },
    Result : {
        screen: Result,
        navigationOptions: {
            title: "Result",
            headerShown: false,
            // headerRight: (route)=> <Button title="Send" onPress={handleHeaderRightClick} />,
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);