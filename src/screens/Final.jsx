import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Final() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have completed the form successfully</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEAD8",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 50,
    textAlign: "center",
  },
});
