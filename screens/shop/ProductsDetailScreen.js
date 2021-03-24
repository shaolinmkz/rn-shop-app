import React from "react";
import { useSelector } from "react-redux";
import { Image, Text, StyleSheet, ScrollView, Button, View } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import colors from "../../constants/colors";

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find(({ id }) => id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>

      <Button title="Add to Cart" color={colors.primary} onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'open-sans',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  }
});

export default ProductDetailsScreen;
