import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const PrimaryButton = ({ children, onPress, style }) => {
  function presshandler(event) {
    console.log("pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, style]
            : [styles.buttonInnerContainer, style]
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    // paddingHorizontal: 16,
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
