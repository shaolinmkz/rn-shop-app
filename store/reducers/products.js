import PRODUCTS from '../../data/dummy-data';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(({ ownerId }) => ownerId === 'u1'),
};

export default (state = initialState, actions) => {
  return state;
};
