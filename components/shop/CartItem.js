import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

/**
 * @param {object} props
 * @param {Function} props.onRemove
 * @returns {JSX}
 */
const CartItem = ({ onRemove, quantity, productPrice, productTitle }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.mainText}>{productTitle.length > 15 ? `${productTitle.slice(0, 15)}...` : productTitle}</Text>
      </View>

      <View style={styles.itemData}>
        <Text style={styles.mainText}>${productPrice.toFixed(2)}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: fonts.openSansRegular,
    color: "#888",
    fontSize: 16,
    marginRight: 5,
  },
  mainText: {
    fontFamily: fonts.openSansBold,
    fontSize: 16,
    overflow: "hidden",
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
