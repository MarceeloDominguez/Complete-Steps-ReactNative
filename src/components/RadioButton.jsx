import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioButton({ onPress, active }) {
  return (
    <TouchableOpacity onPress={onPress !== undefined ? onPress : null}>
      <View
        style={[
          styles.radioButton,
          { backgroundColor: active ? "#5F7161" : "#EFEAD8" },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});
