import React   from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import Mainpage from "./screens/Homepage/Mainpage";
import Drawercontent from "./screens/Homepage/Hometop/Drawercontent";
import Modalpage from "./screens/Modalpage/Modalpage";
import Loginscreen from "./screens/Loginpage/Loginscreen";
import Notification from "./screens/common/Notification";
import {Provider } from "react-native-paper";
import { theme } from "./assets/fonts/Fonts";
import Verification from "./screens/Verification/Verification";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawRoutes() {
    return (
      <Drawer.Navigator
        initialRouteName="mainpage"
        drawerContent={(props) => <Drawercontent {...props} />}
        drawerPosition="left"
        edgeWidth={-3}
        keyboardDismissMode="none"
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
    <Provider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="modalpage">
          <Stack.Screen name="modalpage"  component={Modalpage} options={{header: () => null}} />
          <Stack.Screen name="mainpage" component={DrawRoutes} options={{header: () => null}} />
          <Stack.Screen name="login" component={Loginscreen} options={{title:"Login",headerStyle:{
            backgroundColor:"darkblue",
          },headerTitleStyle:{
            color:"#fff"
          },headerTintColor:"#fff"}} />
          <Stack.Screen name="notifications" component={Notification} options={{header: () => null}} />
          <Stack.Screen name="verification" component={Verification} options={{title:"Verification code",headerStyle:{
            backgroundColor:"darkblue",
          },headerTitleStyle:{
            color:"#fff"
          },headerTintColor:"#fff"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
