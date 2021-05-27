import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator, Button } from 'react-native-paper'
import Errorpage from '../../Errorpage/Errorpage'
import * as Network from 'expo-network';
const Homemiddle = () => {
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
        <View style={{
            marginTop:Dimensions.get("screen").height/5,
        }}>
            {connected || internet ?
            <View style={{
                marginTop:Dimensions.get("screen").height/5,
            }}>
             <ActivityIndicator animating={true} color="red" />
            <Text style={{
                marginTop:10,
                alignSelf:"center",
                fontSize:18,
                marginLeft:20
            }}>Loading....</Text> 
            </View>:<View>
             <Errorpage />
             <Button mode="outlined"   style={styles.againButton}  onPress={()=>{
            internetConnection();
        }} >Try Again</Button>
        </View>
             }
        </View>
    )
}

export default Homemiddle

const styles = StyleSheet.create({
    againButton:{   
            marginVertical:20,
            marginHorizontal:40
            

    }
})
