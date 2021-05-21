import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer"
import { StatusBar } from "expo-status-bar";
import Mainpage from "./screens/Homepage/Mainpage";
import Drawercontent from "./screens/Homepage/Hometop/Drawercontent";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  function DrawRoutes() {
    return (
      <Drawer.Navigator
        initialRouteName="mainpage"
        drawerContent={props=><Drawercontent{...props} />}
        drawerType="back"
      >
        <Drawer.Screen
          name="mainpage"
          component={Mainpage}
          options={{
            title: "Home",
            animationEnabled: true,
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="mainpage">
          <Stack.Screen name="mainpage" component={DrawRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
