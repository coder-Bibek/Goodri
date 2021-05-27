import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Searchbar,Button } from "react-native-paper";
const Searchcomponent = () => {
  const[myOrientation,setMyOrientation]=useState("")
  useEffect(()=>{
    const interval =setInterval(()=>{
    getOrientation()
    },100)
    return(()=>!interval)
  },[])
  const getOrientation=()=>{
    Dimensions.get("window").height>Dimensions.get("window").width?setMyOrientation("potrait"):setMyOrientation("landscape")
  }
  return (
    <View style={[styles.Searchcomponentdiv,{
      paddingVertical:myOrientation=="landscape"? 46 : 16
    }]}>
    <Button  mode="contained"  color="white" labelStyle={styles.categoryText} style={styles.Category} >
    Categories
  </Button>
       <Searchbar
      placeholder="search here...."
      clearButtonMode="while-editing"
      clearTextOnFocus={true}
      style={styles.SearchBar}
      editable={false}
    />
    </View>
  );
};

export default Searchcomponent;

const styles = StyleSheet.create({
  Searchcomponentdiv: {
    flex:0.2,
    flexDirection:"row",
    paddingHorizontal: 10 ,
    backgroundColor: "darkblue",
    marginTop: -6,
    
  },
  SearchBar:{
      flex:0.8,
      height:40,
      marginHorizontal:10
  }
  ,
  categoryText: {
    alignSelf: "center",
    color:"black",
    fontSize:12.5
  },
  Category:
    {
      flex:0.2,
      height:40,
      borderWidth:1,
        borderColor:"#fff"}

});
