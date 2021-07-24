const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = []);
    case "SET":
      return (state = action.products);
    default:
      return state;
  }
};

export default productsReducer;
