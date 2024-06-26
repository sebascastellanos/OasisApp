import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
import StartScreen from "../views/StartScreen";
import HomeScreen from "../views/HomeScreen";
import MapScreen from "../views/MapScreen";
import ScannerScreen from "../views/ScannerScreen";
import Chatbot from "../IAapi/Chatbot";
import TravelScreen from "../views/TravelScreen";
import RegisterScreen from "../views/RegisterScreen";
import BookScreen from "../views/BookScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Chat" component={Chatbot} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}