import React from "react";
import { View, Text } from "react-native";
import ProgressSteps from "./ProgressSteps";

export default function Steps({ title, step }) {
  const totalSteps = 3;
  const stepPercentage = 100 / totalSteps;

  return (
    <View>
      <Text>{title}</Text>
      <ProgressSteps completed={step * stepPercentage} />
    </View>
  );
}
