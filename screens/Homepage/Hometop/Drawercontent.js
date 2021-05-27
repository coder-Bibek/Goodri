import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Hands from "react-native-vector-icons/FontAwesome5";
import Location from "react-native-vector-icons/EvilIcons"
import Pencil from "react-native-vector-icons/Entypo";
import User from "react-native-vector-icons/AntDesign"
import Address from "react-native-vector-icons/Entypo"
import Order from "react-native-vector-icons/Entypo"
import Cart from "react-native-vector-icons/AntDesign"
import Notification from "react-native-vector-icons/Ionicons"
import Lowerdrawer from "./Lowerdrawer";
import { Image } from "react-native-elements";
import {useNavigation} from "@react-navigation/native"
import { useState } from "react";
const Drawercontent = (props) => {
  const navigation = useNavigation();
  const[loggedIn,setLoggedIn]=useState(false)
  return (
    <View style={styles.Drawercontentdiv}>
      <DrawerContentScrollView {...props}>
        <View style={styles.Topview}>
        <Image
        source={require("../../../assets/icon.png")}
        style={{ width: 80, height: 80 }}
        />
        <View style={styles.columnView}>
          <Text style={styles.GoodriText}>Goodri</Text>
          <Text style={styles.GoodriTag}>The Local Online Store</Text>
          </View>
        </View>
        <View style={[styles.loggedinView,{display:loggedIn?"flex":"none"}]}>
          <Text style={styles.welcomeText}>NAMASKAR</Text>
        </View>
        <View style={styles.WelcomeView}>
          <Hands name="praying-hands" size={24} />
          <Text style={styles.welcomeText}>NAMASKAR</Text>
        </View>
        <View style={styles.LocationView}>
          <Location name="location" size={24} color="black" />
          <Text style={styles.LocationText}>Ward-5,Duhabi</Text>
          <Pencil name="pencil" color="black" size={16} />
        </View>
        <TouchableOpacity style={[styles.Loginview,{display:loggedIn?"none":"flex"}]} onPress={()=>navigation.navigate("login")}  >
            <User name="user" size={16} color="black" />
            <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.Addressview}  >
            <Address name="location" size={16}   color={"black"} />
            <Text style={[styles.AddressText,{color:"black"}]}  suppressHighlighting={true} >Duhabi</Text>
            <Pencil name="pencil" color={"black"} size={16} />
        </View>
        <View style={styles.Orderview}>
        <Order name="list" size={16} />
            <Text style={[styles.orderText1,{color:"black"}]}  suppressHighlighting={true} >Mero Orders</Text>
            <Text style={styles.OrderText}>1</Text>
        </View>
        <View style={styles.Cartview}>
        <Cart name="shoppingcart" size={16} />
            <Text style={[styles.cartText1,{color:"black"}]}  suppressHighlighting={true} >Mero Cart</Text>
            <Text style={styles.cartText}>1</Text>
        </View>
        <View style={styles.Notificationview}>
          <Notification name="notifications-outline" color="black" size={16} />
          <Text style={[styles.notificationText1,{color:"black"}]}  suppressHighlighting={true} >Mero Notifications</Text>
          <Text style={styles.notificationText}>1</Text>
        </View>
        <Lowerdrawer />
      </DrawerContentScrollView>
    </View>
  );
};

export default Drawercontent;

const styles = StyleSheet.create({
  Drawercontentdiv: {
    flex: 1,
  },
  Topview: {
    backgroundColor: "rgba(255,254,138,0.8)",
    flex: 0.1,
    padding: 10,
    marginTop: -5,
    flexDirection:"row",
  },
  columnView:{
    paddingTop:15,
    marginHorizontal:15,
    flexDirection: "column",
  },
  GoodriText: {
    color: "rgb(0,174,239)",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
  GoodriTag: {
    color: "black",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  WelcomeView: {
    backgroundColor: "whitesmoke",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10
  },
  welcomeText: {
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  LocationView: {
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:15,
      justifyContent:"space-between",
      marginBottom:25
  },
  LocationText:{
      width:Dimensions.get("screen").width-210,
      fontWeight:"bold",
      fontFamily:"sans-serif"
  },
  Loginview:{
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:20,
      marginBottom:25,
  },
  LoginText:{
      marginHorizontal:14,
      fontWeight:"bold"
  },
  Addressview:{
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:20,
      marginBottom:25
  },
  AddressText:{
      width:Dimensions.get("screen").width-212,
    marginHorizontal:15,
    fontWeight:"bold"
      
  },
  Orderview:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    marginBottom:25
  },
  OrderText:{
    borderWidth:1,
    borderColor:'red',
    width:20,
    height:20,
    borderRadius:20,
    backgroundColor:"red",
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
},
orderText1:{
    width:Dimensions.get("screen").width-212,
    marginHorizontal:15,
    fontWeight:"bold"
},
Cartview:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    marginBottom:25
  },
  cartText:{
    borderWidth:1,
    borderColor:'red',
    width:20,
    height:20,
    borderRadius:20,
    backgroundColor:"red",
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
},
cartText1:{
    width:Dimensions.get("screen").width-212,
    marginHorizontal:15,
    fontWeight:"bold"
},
Notificationview:{
  flexDirection:"row",
  alignItems:"center",
  marginHorizontal:20,
  marginBottom:25
},
notificationText1:{
  width:Dimensions.get("screen").width-212,
  marginHorizontal:15,
  fontWeight:"bold"
},
notificationText:{
  borderWidth:1,
    borderColor:'red',
    width:20,
    height:20,
    borderRadius:20,
    backgroundColor:"red",
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"  
},
loggedinView:{
  padding:10,
  alignItems:"center"
}
});
