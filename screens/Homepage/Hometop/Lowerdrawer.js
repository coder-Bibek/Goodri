import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Helpline from "react-native-vector-icons/Ionicons";
import Rate from "react-native-vector-icons/EvilIcons";
import Settings from "react-native-vector-icons/AntDesign"
const Lowerdrawer = () => {
  return (
    <View style={styles.othersView}>
      <View style={styles.otherTextview}>
        <Text style={styles.otherText}>Others</Text>
      </View>
      <View style={styles.customerhelplineView}>
        <Helpline name="help-buoy-outline" color="black" size={16} />
        <Text
          style={[styles.helplineText, { color: "black" }]}
          suppressHighlighting={true}
        >
          Customer Helpline
        </Text>
      </View>
      <View style={styles.rateusView}>
        <Rate name="star" size={16} />
        <Text 
        style={[styles.helplineText, { color: "black" }]}
        suppressHighlighting={true}
        >Rate Us</Text>
      </View>
      <View style={styles.aboutusView}>
        <Text style={styles.aboutusText}>G</Text>
        <Text 
        style={[styles.aboutUsText1, { color: "black" }]}
        suppressHighlighting={true}
        >About Us</Text>
      </View>
      <View style={styles.releaseView}>
          <Settings name="setting" size={16} color="black" />
        <Text 
        style={[styles.releaseText, { color: "black" }]}
        suppressHighlighting={true}
        >About This Release</Text>
        <Text style={styles.versionText}>v.1.0</Text>
      </View>
    </View>
  );
};

export default Lowerdrawer;

const styles = StyleSheet.create({
  othersView: {
    borderWidth: 0.2,
    borderColor: "grey",
    borderEndWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  otherTextview: {
    marginHorizontal: 10,
    paddingTop: 10,
    marginBottom: 25,
  },
  otherText: {
    color: "grey",
    fontSize: 16,
    marginHorizontal: 15,
  },
  customerhelplineView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 25,
  },
  helplineText: {
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  rateusView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 25,
  },
  aboutusView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 25,
  },
  aboutusText:{
        borderWidth:1,
        width:20,
        height:20,
        borderRadius:20,
        textAlign:"center",
        backgroundColor:"black",
        color:"#fff"
  },
  aboutUsText1:{
    marginHorizontal:13,
    fontWeight:"bold"
  },
  releaseView:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 25,
    justifyContent:"space-between"
  },
  releaseText:{
    width:Dimensions.get("screen").width-223,
    fontWeight: "bold",  
  },
  versionText:{
      color:"grey"
  }
});
