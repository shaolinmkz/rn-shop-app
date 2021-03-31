import CartItemModel from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cart";

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
                state.item[id]?.quantity,
                price,
                title,
                state.item[id].sum + price
              )
            : new CartItemModel(1, price, title, price),
            totalAmount: state.totalAmount + price
        },
      };
    }
    default:
      return state;
  }
};
