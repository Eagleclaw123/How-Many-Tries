import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Instructiontext = ({ children, customStyle }) => {
  return <Text style={[styles.instructionText, customStyle]}>{children}</Text>;
};

export default Instructiontext;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
