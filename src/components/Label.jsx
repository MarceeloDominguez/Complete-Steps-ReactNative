import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Label({ titleLabel, requerid = true }) {
  return (
    <View style={styles.containerLabel}>
      <Text style={styles.label}>{titleLabel}</Text>
      {requerid && <Text>*</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  containerLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    marginBottom: 4,
    letterSpacing: 1,
    fontWeight: "bold",
  },
});
