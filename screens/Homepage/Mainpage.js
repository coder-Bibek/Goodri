import React, { useCallback } from "react";
import { Alert, BackHandler, ScrollView, StyleSheet,View } from "react-native";
import Hometop from "./Hometop/Hometop";
import Homemiddle from "./Homemiddle/Homemiddle";
import Advertisement from "../Adverts/Advertisement";
import { useFocusEffect } from "@react-navigation/native";
import { Provider } from "react-native-paper"
import { theme } from "../../assets/fonts/Fonts";
const Mainpage = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Goodri", "Do you want to exit this app?", [
          { text: "yes", onPress: () => BackHandler.exitApp() },
          { text: "no" },
        ]);

        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    })
  );
  return (
    <Provider theme={theme}>
      <View style={styles.mainContainer}>
          <Hometop />
          <Advertisement/>
          <ScrollView>
          <Homemiddle />
          </ScrollView>
      </View>
    </Provider>
  );
};

export default Mainpage;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: "whitesmoke",
    fontFamily:"sans-serif"
  },
});
