const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      name: "John",
      category: "Doe",
      freshness: "Doe",
      price: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  let updatedProducts; // Declare variable outside switch

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      updatedProducts = state.products.map((product, index) =>
        index === action.payload.index ? action.payload.product : product,
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case "DELETE_PRODUCT":
      updatedProducts = state.products.filter(
        (_, index) => index !== action.payload,
      );
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
