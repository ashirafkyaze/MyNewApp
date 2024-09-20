import React from "react";
import { StyleSheet, Text, View } from "react-native";
import loginScreen from "../screens/loginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/RegisterScreen";
import Home from "../screens/Home";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={loginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator
const sytles = StyleSheet.create({})