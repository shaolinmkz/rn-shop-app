import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailScreen from "../screens/shop/ProductsDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

import CustomHeaderButton from "../components/UI/HeaderButton";

import colors from "../constants/colors";

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? colors.primary : colors.white,
          },
          headerTintColor:
            Platform.OS === "android" ? colors.white : colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "open-sans-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
        }}
      >
        <Stack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
          options={({ navigation }) => ({
            title: "All Products",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Cart"
                  iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                  onPress={() => {
                    navigation.navigate("CartScreen");
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsDetail"
          component={ProductsDetailScreen}
          options={({ route }) => ({ title: route.params.productTitle })}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
