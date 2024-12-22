import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState, useEffect } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setGuessrounds] = useState(0);

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  function pickedNumberHandler(numberEntered) {
    // console.log(numberEntered);
    setPickedNumber(numberEntered);
    setGameIsOver(false);
  }

  function gameOverHandler(guessedNumber) {
    setGameIsOver(true);
    setGuessrounds(guessedNumber);
  }

  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessrounds(0);
  }
  let screen = <StartGameScreen onPickingNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onGameOver={gameOverHandler}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  if (gameIsOver && pickedNumber) {
    screen = (
      <GameOverScreen
        userNumber={pickedNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={startNewGameHandler}
      ></GameOverScreen>
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.15,
    // flex: 1,
  },
});
