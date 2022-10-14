import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Label from "../components/Label";
import Steps from "../components/Steps";

export default function StepOne({ navigation }) {
  const [valueInput, setValueInput] = useState({ name: "", lastname: "" });
  const [nextScreen, setNextScreen] = useState(false);

  const step = nextScreen ? 1 : 0;

  const error =
    valueInput.name === "" || valueInput.lastname === "" ? true : false;

  const handleChange = (value, field) => {
    setValueInput({ ...valueInput, [field]: value });
  };

  const handleSubmit = () => {
    if (valueInput.name === "" || valueInput.lastname === "") {
      setNextScreen(false);
    } else {
      setNextScreen(true);
      navigation.navigate("StepTwo");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor="#EFEAD8" barStyle="dark-content" />
      <Steps title="Step 1 of 3" step={step} />

      <Label titleLabel="Name" requerid />
      <TextInput
        placeholder="Example: John"
        value={valueInput.name}
        onChangeText={(value) => handleChange(value, "name")}
        style={styles.input}
      />

      <Label titleLabel="Last Name" requerid />
      <TextInput
        placeholder="Write a last name"
        value={valueInput.lastname}
        onChangeText={(value) => handleChange(value, "lastname")}
        style={styles.input}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonNext}
          activeOpacity={0.5}
          disabled={error ? true : false}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: "#EFEAD8",
  },
  input: {
    backgroundColor: "#ccc",
    height: 50,
    marginBottom: 30,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    alignItems: "flex-end",
  },
  buttonNext: {
    backgroundColor: "#6D8B74",
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "bold",
  },
});
