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
  return { type: "SET", products: productData };
};
