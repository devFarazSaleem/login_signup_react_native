import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp(navigation) {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TouchableOpacity
        onPress={() => {
          navigationRef.current?.navigate("Login");
          // navigation.push("Login");
        }}
      >
        <Text>Goto login</Text>
      </TouchableOpacity>
      <StatusBar style="inverted" />
    </View>
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
