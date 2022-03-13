import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/home";
import CameraComponent from "../screens/camera";
import Easel from "../screens/easel";

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
        screen: Easel
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);