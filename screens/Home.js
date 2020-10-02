import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const navigationRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Home</Text>
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
        <Text style={{ color: "white", fontSize: 16 }}>LOGOUT</Text>
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
