import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from "react-native-vector-icons/Entypo"
const Rightcomponent = () => {
    
    return (
        <View style={styles.Leftcomponentview}>
        
<Cart name="shopping-cart" size={22} color="#fff" />
<Text style={styles.cartText}>1</Text>
        </View>
    )
}

export default Rightcomponent

const styles = StyleSheet.create({
    Leftcomponentview:{
        flexDirection:"row",
    },
    cartText:{
        color:"white",
        borderWidth:0.5,
        borderColor:"red",
        backgroundColor:"red",
        width:20,
        height:20,
        borderRadius:20,
        textAlign:"center",
        marginTop:-14,
        zIndex:99,
        fontWeight:"bold"
    }
})
