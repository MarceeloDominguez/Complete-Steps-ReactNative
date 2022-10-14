import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Steps from "../components/Steps";

export default function StepOne({ navigation }) {
  const [valueInput, setValueInput] = useState({ name: "" });
  const [nextScreen, setNextScreen] = useState(false);

  const step = nextScreen ? 1 : 0;

  const handleChange = (value, field) => {
    setValueInput({ ...valueInput, [field]: value });
  };

  const handleSubmit = () => {
    if (valueInput.name === "") {
      setNextScreen(false);
    } else {
      setNextScreen(true);
      navigation.navigate("StepTwo");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Steps title="Paso numero 1" step={step} />

      <TextInput
        placeholder="Paso 1"
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
        onPress={() => handleSubmit()}
        //isValid = Formik
        disabled={valueInput.name === "" ? true : false}
      />
    </View>
  );
}
