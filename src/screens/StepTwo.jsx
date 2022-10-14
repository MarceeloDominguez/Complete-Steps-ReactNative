import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Steps from "../components/Steps";

export default function StepTwo({ navigation }) {
  const [valueInput, setValueInput] = useState({ name: "" });
  const [nextScreen, setNextScreen] = useState(false);

  const step = nextScreen ? 2 : 1;

  const handleChange = (value, field) => {
    setValueInput({ ...valueInput, [field]: value });
  };

  const handleSubmit = () => {
    if (valueInput.name === "") {
      setNextScreen(false);
    } else {
      setNextScreen(true);
      navigation.navigate("StepThee");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Steps title="Paso numero 2" step={step} />

      <TextInput
        placeholder="Paso 1 ..."
        value={valueInput.name}
        onChangeText={(value) => handleChange(value, "name")}
        style={{
          backgroundColor: "#ccc",
          width: 200,
          height: 50,
          marginVertical: 40,
        }}
      />

      <Button
        title="Siguiente"
        //onPress={() => navigation.navigate("StepThee")}
        onPress={() => handleSubmit()}
      />
      <Button title="Atras" onPress={() => navigation.goBack()} />
    </View>
  );
}
