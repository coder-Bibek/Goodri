import React from 'react'
import { StyleSheet,View} from 'react-native'
import {Header} from "react-native-elements"
import Centercomponent from './Centercomponent'
import Searchcomponent from './Searchcomponent'
import { useNavigation } from '@react-navigation/native';
const Hometop = () => {
    const navigation = useNavigation();
    const handleDrawer=()=>{
        navigation.toggleDrawer();
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
        rightComponent={{ icon: 'shopping-cart' , color: '#fff' }}
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
