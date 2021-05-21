import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Searchbar,Button } from "react-native-paper";
const Searchcomponent = () => {
  return (
    <View style={styles.Searchcomponentdiv}>
    <Button  mode="contained" color="white" style={styles.Category} >
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
      flexDirection:"row",
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: "darkblue",
    marginTop: -6,
  },
  SearchBar:{
      width:Dimensions.get("screen").width-155,
      height:40,
      marginHorizontal:10
  }
  ,
  categoryText: {
    alignSelf: "center",
    color: "grey",
    fontSize:18,
    
  },
  Category:
    {borderWidth:1,
        borderColor:"#fff"}

});
