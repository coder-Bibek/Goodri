import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import Mainmodal from '../common/Mainmodal'
import * as Network from "expo-network"
import Nowifi from "react-native-vector-icons/FontAwesome5"
import { Button, TextInput } from 'react-native-paper'
const Modalpage = () => {
    const[connected,setConnected]=useState(true)
    const[internet,setInternet]=useState(true)
    useEffect(()=>{
        const interval=setInterval(()=>{
            internetConnection();
        },500)
       return(()=>!interval)
    },[])
    const internetConnection=async()=>{
        const{isInternetReachable}=await Network.getNetworkStateAsync();
         const {isConnected} = await Network.getNetworkStateAsync();
         setConnected(isConnected);
        setInternet(isInternetReachable);
    }
    return (
        <View style={styles.modalView}>
             <ScrollView>
            <ImageBackground source={require("../../assets/front.png")}   style={styles.imageBackground}>
              
                {connected || internet?
                <Mainmodal />:
                <View style={styles.errorView}>
                    <Nowifi name="wifi" size={28} color="white" style={styles.CrossSign} />
                    <TextInput mode="outlined" editable={false} style={styles.noInternet} placeholder="No internet Connection Found" placeholderTextColor="grey" />
                </View>
                }
            </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default Modalpage

const styles = StyleSheet.create({
    modalView:{
        flex:1
    },
    imageBackground:{
        width:Dimensions.get("screen").width,
        height:Dimensions.get("screen").height
    },
    errorView:{
        flex:1,
    justifyContent:"center"
    },
    noInternet:{margin:10,textAlign:"center",color:"grey"},
    CrossSign:{
 
        alignSelf:"center"
    }
})
