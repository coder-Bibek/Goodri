import {ThemeProvider } from "react-native-elements";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Hometop from "./Hometop/Hometop";
import Homemiddle from "./Homemiddle/Homemiddle";
import Advertisement from "../Adverts/Advertisement";
const Mainpage = () => {
  return (
    <ThemeProvider>
      <View style={styles.mainContainer}>
          <Hometop />
          <Advertisement/>
          <ScrollView>
          <Homemiddle />
          </ScrollView>
      </View>
    </ThemeProvider>
  );
};

export default Mainpage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: "whitesmoke",
  },
});
