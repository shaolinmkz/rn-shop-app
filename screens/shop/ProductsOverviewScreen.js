import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, StyleSheet } from "react-native";

import * as cartActions from '../../store/actions/cart';
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = ({ navigation }) => {
  const { availableProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={availableProducts}
      keyExtractor={({ id }) => id}
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
          onAddToCart={() => {
            dispatch(cartActions.addToCart({ imageUrl, title, price, id }))
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
