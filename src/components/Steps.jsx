import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProgressSteps from "./ProgressSteps";

export default function Steps({ title, step }) {
  const { top } = useSafeAreaInsets();
  const totalSteps = 3;
  const stepPercentage = 100 / totalSteps;

  return (
    <View style={[styles.container, { marginTop: top + 30 }]}>
      <Text style={styles.title}>{title}</Text>
      <ProgressSteps completed={step * stepPercentage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5F7161",
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#EFEAD8",
  },
});
