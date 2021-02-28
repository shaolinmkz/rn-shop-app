import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import colors from "../../constants/colors";

export default function StartGameScreen() {
  const [gameNumber, setGameNumber] = useState(0);
  const [enteredValue, setEnteredValue] = useState("");
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(null);
  const [guessType, setGuessType] = useState("");

  const numberInputHandler = (val) => {
    setEnteredValue(`${val}`.replace(/[^0-9]/g, ""));
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 99) + 1;
    setGameNumber(num > 99 ? num - 1 : num);
  };

  const startGame = () => {
    setStart(true);
    generateRandomNumber();
  };

  const resetGame = () => {
    setGameNumber(0);
    setWin(null);
    setStart(false);
    setEnteredValue("");
    setGuessType('');
  };

  const confirmEntry = () => {
    if (!enteredValue) {
      Alert.alert("No Guess", "Please enter a value");
    } else if (Number(enteredValue) === gameNumber) {
      setWin(true);
      setGuessType("Correct...✅" + ` => ${gameNumber}`);
    } else if (Number(enteredValue) < gameNumber) {
      setGuessType("Guess Higher...👆🏽");
      setWin(false);
    } else {
      setGuessType("Guess Lower...👇🏽");
      setWin(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        {!start && (
          <View style={{ padding: 50 }}>
            <Text style={styles.title}>Start Game</Text>
            <View>
              <View style={{ marginTop: 20 }}>
                <Button
                  title="START"
                  color={colors.secondary}
                  onPress={startGame}
                />
              </View>
            </View>
          </View>
        )}

        {start && (
          <>
            <Text style={styles.heading}>START A NEW GAME!</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.title}>Enter a Number</Text>
              <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                value={enteredValue}
                onChangeText={numberInputHandler}
              />
              {!win && (
                <View style={styles.btnContainer}>
                  <View style={styles.button}>
                    <Button
                      title="RESET"
                      color={colors.primary}
                      onPress={() => {
                        setEnteredValue("");
                      }}
                    />
                  </View>
                  <View style={styles.button}>
                    <Button
                      title="CONFIRM"
                      color={colors.secondary}
                      onPress={confirmEntry}
                    />
                  </View>
                </View>
              )}

              {win && (
                <View>
                  <View style={{ marginTop: 20 }}>
                    <Button
                      title="RESTART GAME"
                      color={colors.primary}
                      onPress={resetGame}
                    />
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        <View style={{ padding: 50 }}>
          <Text style={{ fontSize: 15 }}>{guessType}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 50,
  },
  heading: {
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  inputContainer: {
    width: "100%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 5,
    marginVertical: 20,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
