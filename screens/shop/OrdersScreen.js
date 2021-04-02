import React from "react";
import { useSelector } from "react-redux";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import colors from "../../constants/colors";

const ProductDetailsScreen = () => {
  const { orders } = useSelector((state) => state.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <Text>{item.totalAmount}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
