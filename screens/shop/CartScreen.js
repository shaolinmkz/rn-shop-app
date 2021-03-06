import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, StyleSheet, FlatList, Button, View } from "react-native";

import * as cartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/orders";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import CartItem from "../../components/shop/CartItem";

const ProductDetailsScreen = () => {
  const { totalAmount, item } = useSelector(({ cart }) => ({
    totalAmount: cart.totalAmount,
    item: Object.keys(cart.item)
      .map((key) => ({
        productId: key,
        ...cart.item[key],
      }))
      .sort((a, b) => (a.productId > b.productId ? 1 : -1)),
  }));

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${totalAmount.toFixed(2)} </Text>
        </Text>
        <Button
          color={colors.secondary}
          title="Order Now"
          disabled={item.length === 0}
          onPress={() => {
            dispatch(ordersActions.addOrder(item, totalAmount))
          }}
        />
      </View>
      <FlatList
        data={item}
        key={({ productId }) => productId}
        renderItem={({
          item: { quantity, productPrice, productTitle, productId },
        }) => (
          <CartItem
            onRemove={() => {
              dispatch(cartActions.removeItem(productId));
            }}
            quantity={quantity}
            productPrice={productPrice}
            productTitle={productTitle}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  summaryText: {
    fontFamily: fonts.openSansBold,
    fontSize: 18,
  },
  amount: {
    color: colors.primary,
  },
});

export default ProductDetailsScreen;
