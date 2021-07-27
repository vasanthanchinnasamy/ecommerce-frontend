export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const reset = () => {
  return { type: "RESET" };
};

export const set = (productData) => {
  return { type: "SET", payload: productData };
};

export const addToCart = (cartData) => {
  return { type: "ADD_TO_CART", payload: cartData };
};
