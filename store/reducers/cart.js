import CartItemModel from "../../models/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initialState = {
  item: {},
  totalAmount: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART: {
      const { price, title, id } = actions.payload;
      return {
        ...state,
        item: {
          ...state.item,
          [id]: state.item[id]
            ? new CartItemModel(
                state.item[id]?.quantity + 1,
                price,
                title,
                state.item[id].sum + price
              )
            : new CartItemModel(1, price, title, price),
        },
        totalAmount: state.totalAmount + price,
      };
    }
    case REMOVE_FROM_CART: {
      const id = actions.payload;
      const { quantity, productPrice } = state.item[id];

      if (quantity > 1) {
        return {
          ...state,
          item: {
            ...state.item,
            [id]: {
              ...state.item[id],
              quantity: Math.abs(state.item[id].quantity - 1),
            },
          },
          totalAmount: Math.abs(state.totalAmount - productPrice),
        };
      } else {
        const itemCopy = { ...state.item };
        delete itemCopy[id];
        return {
          ...state,
          item: itemCopy,
          totalAmount: Math.abs(state.totalAmount - productPrice),
        };
      }
    }
    default:
      return state;
  }
};
