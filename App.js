import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Splashscreen from "./screens/Splashscreen";
const Stack = createStackNavigator(); 
export default function App() {

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="splashscreen" component={Splashscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
