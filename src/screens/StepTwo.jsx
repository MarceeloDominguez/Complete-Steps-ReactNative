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

export default function StepTwo({ navigation }) {
  const [valueInput, setValueInput] = useState({
    nickname: "",
    phone: "",
    email: "",
  });
  const [nextScreen, setNextScreen] = useState(false);

  const step = nextScreen ? 2 : 1;

  const error = valueInput.email === "" ? true : false;

  const handleChange = (value, field) => {
    setValueInput({ ...valueInput, [field]: value });
  };

  const handleSubmit = () => {
    if (valueInput.email === "") {
      setNextScreen(false);
    } else {
      setNextScreen(true);
      navigation.navigate("StepThee");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor="#EFEAD8" barStyle="dark-content" />
      <Steps title="Step 2 of 3" step={step} />

      <Label titleLabel="Nickname" requerid={false} />
      <TextInput
        placeholder="nickname"
        value={valueInput.nickname}
        onChangeText={(value) => handleChange(value, "nickname")}
        style={styles.input}
      />

      <Label titleLabel="Phone" requerid={false} />
      <TextInput
        placeholder="1198632587"
        value={valueInput.phone}
        onChangeText={(value) => handleChange(value, "phone")}
        style={styles.input}
      />

      <Label titleLabel="Email" />
      <TextInput
        placeholder="test@gmail.com"
        value={valueInput.email}
        onChangeText={(value) => handleChange(value, "email")}
        style={styles.input}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonNext}
          activeOpacity={0.5}
        >
          <Text style={styles.textButton}>Back</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between",
    paddingBottom: 30,
    alignItems: "flex-end",
    flexDirection: "row",
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
