import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const filemanager = async (props) => {
    console.log('props: ' + props.imageAsBase64);
    let fileUri = FileSystem.documentDirectory + "text.txt";
    await FileSystem.writeAsStringAsync(fileUri, props.imageAsBase64, { encoding: FileSystem.EncodingType.UTF8 });

    // const reader = new FileReader();

    // reader.onload = async (e) => { 
    //   const text = (e.target.result);
    // };
    
    // reader.readAsText(e.target.files[0])

    console.log('fileUri: ' + fileUri);
    // return (
    //     <>
            
    //     </>
    // )
}

export default filemanager;
