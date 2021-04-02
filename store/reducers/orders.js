import { ADD_ORDER } from "../actions/orders";
import OrderModel from "../../models/order";

const initialState = {
  orders: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ORDER: {
      const { items, amount } = actions.payload;
      const newOrder = new OrderModel(
        Date.now(),
        items,
        amount,
        Date().toString()
      );

      return {
        ...state,
        orders: [newOrder, ...state.orders],
      };
    }
    default:
      return state;
  }
};
