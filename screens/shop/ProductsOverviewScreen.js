import React from "react";
import { useSelector } from "react-redux";
import { FlatList, Text, StyleSheet } from "react-native";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = ({ navigation }) => {
  const { availableProducts } = useSelector((state) => state.products);

  return (
    <FlatList
      data={availableProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { imageUrl, title, price, id } }) => (
        <ProductItem
          image={imageUrl}
          title={title}
          price={price}
          onViewDetail={() => {
            navigation.navigate("ProductsDetail", {
              productId: id,
              productTitle: title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
