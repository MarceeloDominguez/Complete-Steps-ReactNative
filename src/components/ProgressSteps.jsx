import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressSteps({ completed }) {
  return (
    <AnimatedCircularProgress
      size={100}
      width={5}
      tintColor="red"
      backgroundColor="#ccc"
      fill={completed}
      rotation={360}
      lineCap="round"
      backgroundWidth={4}
      duration={0}
    >
      {(fill) => <Text>{completed.toFixed(0)} %</Text>}
    </AnimatedCircularProgress>
  );
}
