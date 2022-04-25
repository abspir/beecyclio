import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Alert, Modal, StyleSheet, Text, Pressable } from "react-native";
import { BrowserView, MobileView } from 'react-device-detect';
//import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import fcs from '../assets/fcs.png';
import Papa from 'papaparse';
import symbolInfomrationMatrix from '../assets/symbol-information-matrix.csv'
import axios from 'axios';

const Result = ({ navigation }) => {


    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState("");
    const [modalDescription, setModalDescription] = useState("");

    const clickHandler = () => {
        navigation.navigate('Home');
    };

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
    });

    const ResultTitle = styled.Text`
    font-size: 1.5rem;
    color: #373737;
    `;
    const View = styled.View`
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: normal;
        width: 100%;
        height: 100%;
        background-size: 68px;
        background-color: rgb(255, 255, 255);
        background-position: center;
    `;

    const SimplePressableButton = styled.Text`
        font-size: 1.5rem;
        color: #000;
        backdrop-filter: blur(4px);
        padding: 0px 10px 10px;
    `;

    const TouchableOpacity = styled.TouchableOpacity``;


    const showInformation = (e) => {

        console.log(e.target.alt);

        let SIMItem = parsedData.find((data) => {
            if (data.Title === e.target.alt) return true;
        });

        setModalText(SIMItem.Title);
        setModalDescription(SIMItem.Description);
        setModalVisible(!modalVisible);

    };
    const [AWSRekognitionResponse] = useState(navigation.getParam('response'));
    console.log(AWSRekognitionResponse);
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);
    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

    let getSIM = () => {
        axios.get(symbolInfomrationMatrix)
            .then((res) => {
                console.log(res);
                Papa.parse(res.data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const rowsArray = [];
                        const valuesArray = [];

                        // Iterating data to get column name and their values
                        results.data.map((d) => {
                            rowsArray.push(Object.keys(d));
                            valuesArray.push(Object.values(d));
                        });

                        // Parsed Data Response in array format
                        setParsedData(results.data);

                        // Filtered Column Names
                        setTableRows(rowsArray[0]);

                        // Filtered Values
                        setValues(valuesArray);

                        // console.log(tableRows);
                        // console.log(values);
                    },
                });
            })
            .catch(function (err) {
                // handle error
                console.log(err.message);
            })
    }
    //After render hook
    useEffect(() => {
        //Axios GET to retrieve file
        getSIM();
    }, []);
    //</>style={{ backgroundImage: `url(${honeycomb})` }}>
    return (
        <>
            <View>
                <MobileView>
                    <View>
                        <ResultTitle>Please select an item</ResultTitle>
                    </View>

                    <Modal animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>

                                <Text style={styles.modalText}>{modalText}</Text>

                                <Text style={styles.modalText}>{modalDescription}</Text>
                                
                                <Pressable style={[styles.button, styles.buttonClose]} 
                                        onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Back</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View>
                        <TouchableOpacity onPress={showInformation}>
                            <img style={{ width: "auto", maxWidth: "300px" }} alt="Forest Certified" src={fcs} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <SimplePressableButton onClick={clickHandler}>Back</SimplePressableButton>
                    </View>
                </MobileView>
                <BrowserView>
                    Browser
                </BrowserView>
            </View>
            <StatusBar style="auto" />
        </>
    )
};

export default Result;
