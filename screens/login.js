import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const navigationRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <TouchableOpacity
        onPress={() => {
          //   navigationRef.current?.navigate("SignUp");
          navigation.push("SignUp");
        }}
      >
        <Text>Goto SignUp</Text>
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
