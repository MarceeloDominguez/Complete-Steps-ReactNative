import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import RadioButton from "../components/RadioButton";
import Steps from "../components/Steps";

const skills = [
  "I don't know any",
  "Javascript",
  "PHP",
  "Java",
  "Python",
  "Dart",
  "Go",
];

export default function StepThee({ navigation }) {
  const [nextScreen, setNextScreen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const step = nextScreen ? 3 : 2;

  const error = selectedOptions.length === 0 ? true : false;

  const removeSelected = (skill) => {
    const listSkill = selectedOptions.filter((i) => i !== skill);
    setSelectedOptions(listSkill);
  };

  const isSelected = (skill) => {
    //busca el skill en el array que cumpla la condicion. retorna true
    return selectedOptions.some((i) => i === skill);
  };

  const toggleSkill = (skill) => {
    if (isSelected(skill)) {
      //si el skill cumple la condicion en el array lo borramos con removeSelected
      removeSelected(skill);
    } else {
      //sino seguimos marcando los skill
      setSelectedOptions([...selectedOptions, skill]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      setNextScreen(false);
    } else {
      setNextScreen(true);
      navigation.navigate("Final");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor="#EFEAD8" barStyle="dark-content" />
      <Steps title="Step 3 of 3" step={step} />

      <Text style={styles.title}>Select at least one option</Text>

      {skills.map((item, index) => (
        <View key={index} style={styles.containerItems}>
          <View>
            <RadioButton
              onPress={() => toggleSkill(item)}
              active={isSelected(item)}
            />
          </View>
          <Text style={styles.skills}>{item}</Text>
        </View>
      ))}

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
  title: {
    fontSize: 16,
    marginBottom: 5,
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  containerItems: {
    flexDirection: "row",
    backgroundColor: "#D0C9C0",
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  skills: {
    marginLeft: 10,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  containerButton: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30,
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 30,
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
