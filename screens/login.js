import { StatusBar } from "expo-status-bar";
import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const navigationRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Login</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          //   navigationRef.current?.navigate("SignUp");
          AsyncStorage.setItem("loggedin", true);
          navigation.push("Home");
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          //   navigationRef.current?.navigate("SignUp");
          navigation.push("SignUp");
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Goto SignUp</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
