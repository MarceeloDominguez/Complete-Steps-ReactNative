import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StepOne from "../screens/StepOne";
import StepThee from "../screens/StepThee";
import StepTwo from "../screens/StepTwo";
import Final from "../screens/Final";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="StepOne" component={StepOne} />
      <Stack.Screen
        name="StepTwo"
        component={StepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThee"
        component={StepThee}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Final"
        component={Final}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
