import React from "react";
import { StyleSheet, View } from "react-native";
// import * as Font from "expo-font";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import Header from "./components/app1/Header";
import StartGameScreen from "./screens/app1/StartGameScreen";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

const App1 = () => {
  // const [dataLoaded, setDataLoaded] = React.useState(false);
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(error) => console.log(error)}
  //     />
  //   );
  // }

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header headerTitle="Guess a number" />
      <StartGameScreen />
    </View>
  );
};
export default function App() {
  return <App1 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
