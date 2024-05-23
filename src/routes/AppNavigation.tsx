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
      </Stack.Navigator>
    </NavigationContainer>
  );
}