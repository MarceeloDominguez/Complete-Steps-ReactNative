import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressSteps({ completed }) {
  return (
    <AnimatedCircularProgress
      size={60}
      width={5}
      tintColor="#FF6D28"
      backgroundColor="#EFEAD8"
      fill={completed}
      rotation={360}
      lineCap="round"
      backgroundWidth={4}
      duration={0}
    >
      {(fill) => (
        <Text
          style={{ color: "#EFEAD8", fontWeight: "bold", letterSpacing: 0.5 }}
        >
          {completed.toFixed(0)}%
        </Text>
      )}
    </AnimatedCircularProgress>
  );
}
