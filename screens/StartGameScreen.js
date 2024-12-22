import React from "react";
import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instructiontext from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickingNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler(enteredText) {
    console.log("confirm pressed");
    const chosenNumber = parseInt(enteredNumber, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be betwwen 1 and 99", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickingNumber(chosenNumber);
  }
  function resetInputHandler(enteredText) {
    console.log("reset pressed");
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instructiontext>Enter a Number</Instructiontext>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    // backgroundColor: Colors.primary800,
    padding: 1,
    // borderRadius: 8,
    // elevation: 4,
  },
  numberInput: {
    marginTop: 20,
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    // lineHeight: 50, // Set this to match the height
    paddingBottom: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});
