import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailScreen from "../screens/shop/ProductsDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

import CustomHeaderButton from "../components/UI/HeaderButton";

import colors from "../constants/colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : colors.white,
  },
  headerTintColor: Platform.OS === "android" ? colors.white : colors.primary,
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};

const Home = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          title: "All Products",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={navigation.toggleDrawer}
              />
            </HeaderButtons>
          ),
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
        options={{ title: "Your Cart" }}
      />
    </Stack.Navigator>
  );
};

const Orders = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: "Your Orders" }}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{ activeTintColor: colors.primary }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <DrawerStack />
  </NavigationContainer>
);
