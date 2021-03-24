import React, { useEffect } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";

// Screen Navigator
import ShopNavigator from './navigation/ShopNavigator';

// reducers
import productReducer from "./store/reducers/products";

const reducers = combineReducers({
  products: productReducer,
});

const store = createStore(reducers);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  useEffect(() => {
    fetchFonts()
      .finally(() => setDataLoaded(true))
      .catch((error) => console.log(error));
  }, []);

  return !dataLoaded ? null : (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
