import React,{useEffect,useContext,useState} from 'react';
import {
    ImageBackground,
    Text,
    View,
    Image,
    StyleSheet,
    Button,
    Platform,
} from "react-native"; 
import { useFocusEffect } from '@react-navigation/native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from 'expo-image-picker';
// import { PermissionsAndroid } from 'react-native';

export default function NewPost (){

   const [image, setImage] = useState(null);

    useEffect(
      React.useCallback( async () => {
          // fetch("https://restcountries.com/v3.1/name/peru")
          // .then(response =>{
          //     response.json().then(data =>{
          //       // console.log(data);
          //       }
          //     );
          // })
          
            // if(Platform.OS !== "web"){
            //     const {status} = ImagePicker.requestCameraPermissionsAsync();
            //     if(status !== "granted"){
            //         alert("Permission denied!");
            //     }
            // }
      }),[]);

    const onPressHandle = async () =>{
        // let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        //     });

        // console.log(result);

        // if (!result.cancelled) {       
        //     setImage(result.uri);
        // }
          
    };

    return(      
        <View style={styles.container}>
            <Button  onPress={() => onPressHandle()} title='choose photo' />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
     
    },
    
});