import React, { useEffect, useState } from 'react'
import { StyleSheet,View} from 'react-native'
import {Header} from "react-native-elements"
import Centercomponent from './Centercomponent'
import Searchcomponent from './Searchcomponent'
import { useNavigation } from '@react-navigation/native';
import * as Network from "expo-network";
import Rightcomponent from './Rightcomponent'
const Hometop = () => {
    const[connected,setConnected]=useState(false)
    const[internet,setInternet]=useState(false)
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
    const navigation = useNavigation();
    const handleDrawer=()=>{
        {connected || internet?
        navigation.toggleDrawer():<></>}
    }
    return (
        <>
        <Header
        containerStyle={styles.Header}
        barStyle="light-content"
        backgroundColor="darkblue"
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{handleDrawer()}}}
        centerComponent={<Centercomponent />}
        rightComponent={<Rightcomponent />}
      />
      <Searchcomponent />
      </>
    )
}

export default Hometop

const styles = StyleSheet.create({
    Topcontainer:{
        backgroundColor:"darkblue"
    },
    Header:{
        marginTop:13,
        elevation:0,
        borderColor:"darkblue",
        shadowColor:'transparent',
    }
})
