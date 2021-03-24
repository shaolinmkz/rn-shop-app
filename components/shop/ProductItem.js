import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../constants/colors";

const ProductItem = ({ image, title, price, onViewDetail, onAddToCart }) => {
  return (
    <View style={styles.products}>
      <TouchableOpacity activeOpacity={0.5} onPress={onViewDetail}>
        <>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={onViewDetail}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={onAddToCart}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  products: {
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
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  button: {
    padding: 5,
    paddingHorizontal: 20,
    backgroundColor: Platform.OS === "android" ? colors.primary : colors.white,
    borderRadius: 5,
    borderColor: Platform.OS === "ios" ? colors.primary : colors.white,
    borderWidth: Platform.OS === "ios" ? 1 : 0,
  },
  buttonText: {
    color: Platform.OS === "android" ? colors.white : colors.primary,
    fontSize: Platform.OS === "android" ? 16 : 18,
  },
});

export default ProductItem;
