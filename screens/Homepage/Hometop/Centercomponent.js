import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Pencil from "react-native-vector-icons/Entypo";
const Centercomponent = () => {
  return (
    <TouchableOpacity style={styles.Centerdiv} activeOpacity={0.5} onPress={()=>{
      alert("hello")
    }}>
      <Text style={styles.delText}>Delivery Location</Text>
      <View style={styles.locationedit}>
        <Text style={styles.Text}>sangam chowk,Duhabi...</Text>
        <Pencil name="pencil" color="#fff" size={16} />
      </View>
    </TouchableOpacity>
  );
};

export default Centercomponent;

const styles = StyleSheet.create({
  Centerdiv: {
    color: "#fff",
    marginTop: -12,
  },
  Text: {
    color: "#fff",
    fontWeight: "bold",
  },
  delText: {
    color: "#fff",
    fontSize: 12,
  },
  locationedit: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
