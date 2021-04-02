import React, { useEffect } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Font from "expo-font";

// Screen Navigator
import ShopNavigator from './navigation/ShopNavigator';

// reducers
import ordersReducer from "./store/reducers/orders";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(reducers, {}, composeWithDevTools());

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
