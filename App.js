import { StatusBar } from "expo-status-bar";
import React from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/SignUp";
import Login from "./screens/login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Stack = createStackNavigator();
export default function App() {
  const loggedIN = AsyncStorage.getItem("loggedin");
  return (
    <NavigationContainer>
      {loggedIN ? (
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
