import React from 'react';
import styled from 'styled-components/native';
import { BrowserView, MobileView } from 'react-device-detect';
import { Text } from 'react-native';
import qrcode from "../images/qr-to-beecyclio.svg";
import honeycomb from '../images/honeycomb.svg';
import CameraImage from '../images/mobile_photos.svg';
import { StatusBar } from 'expo-status-bar';


/* ... inside the render or return of your component ... */

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

    const HomeTitle = styled.Text`
        font-size: 4.5rem;
        color: #fff;
        backdrop-filter: blur(4px);
        padding: 0px 10px 10px;
    `;

    const HomePrompt = styled.Text`
        font-size: 2rem;
        color: #fff;
        backdrop-filter: blur(4px);
        padding: 0px 10px 10px;
    `;
    const View = styled.View`
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        background-size: 68px;
        background-color: rgb(255, 255, 255);
        background-positon: center;
    `;

    const pressHandler = () => {
        navigation.navigate('Camera');
    };

    const style = {
        glassButton: {
            /* background styles */
            position: "relative",
            display: "inline - block",
            padding: "15px 25px",
            backgroundColor: "transparent", /*for compatibility with older browsers*/
            //backgroundImage: "linear-gradient(green, lightgreen)",
            backdropFilter: "blur(4px)",

            /* text styles */
            textDecoration: "none",
            color: "#fff",
            fontSize: "2rem",
            fontFamily: "Sans-serif",
            fontWeight: "100",

            borderRadius: "3px",
            boxShadow: "0px 1px 4px -2px #333",
            textShadow: "0px -1px #333"
        },
        // glassHeader: {
        //     /* background styles */
        //     position: "relative",
        //     display: "inline - block",
        //     padding: "1rem",
        //     backgroundColor: "transparent", /*for compatibility with older browsers*/
        //     //backgroundImage: "linear-gradient(green, lightgreen)",
        //     backdropFilter: "blur(4px)",

        //     /* text styles */
        //     textDecoration: "none",
        //     color: "#fff",
        //     fontSize: "4rem",
        //     fontFamily: "Sans-serif",
        //     fontWeight: "100",

        //     borderRadius: "3px",
        //     boxShadow: "0px 1px 4px -2px #333",
        //     textShadow: "0px -1px #333"
        // },
        glassAfter: {
            content: '',
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "calc(100 % - 4px)",
            height: "50%",
            background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))"
            
        }
    }

    return (
        <>

            <View style={{ backgroundImage: `url(${honeycomb})` }}>
                <>
                    <HomeTitle style={style.glassHeader}>Beecyclio</HomeTitle>
                    {/* <div style={style.glassAfter}></div> */}
                </>
                <>
                    <HomePrompt onClick={pressHandler}>Begin Scan</HomePrompt>
                    {/* <a style={style.glassButton} onClick={pressHandler}>
                        Begin Scan
                    </a> */}
                    {/* <div style={style.glassAfter}></div> */}
                </>
                {/* <BrowserView>
                    <View>
                        <img style={{ width: "auto", maxWidth: "300px" }} alt="qrcode" src={qrcode} />
                    </View>
                </BrowserView>
                <MobileView>
                    Mobile View
                </MobileView> */}
            </View>
            <StatusBar style="auto" />
        </>
    )
};

export default Home;
