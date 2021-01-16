import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(`https://5fc0748dfd14be0016749cfe.mockapi.io/karthik/acme`)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data
        });
      });
  };
};
export const addProduct = (payload) => {
  return {
    type: "ADD_PRODUCT",
    payload
  };
};
export const deleteProduct = (payload) => {
  return {
    type: "DELETE_PRODUCT",
    payload
  };
};
export const resetCountInProduct = (payload) => {
  return {
    type: "RESETCOUNT_IN_PRODUCT",
    payload
  };
};
export const updateCountInProduct = (payload) => {
  return {
    type: "UPDATE_IN_PRODUCT",
    payload
  };
};
export const totalCartCount = (payload) => {
  return {
    type: "TOTAL_CART_COUNT",
    payload
  };
};
export const updateCartCount = (payload) => {
  return {
    type: "UPDATE_CART_COUNT",
    payload
  };
};
export const totalPrice = (payload) => {
  return {
    type: "TOTAL_PRICE",
    payload
  };
};
export const updateTotalPrice = (payload) => {
  return {
    type: "UPDATE_TOTAL_PRICE",
    payload
  };
};
export const cartDisplay = (payload) => {
  return {
    type: "CART_DISPLAY",
    payload
  };
};
export const cartHide = (payload) => {
  return {
    type: "CART_HIDE",
    payload
  };
};
export const checkout = (payload) => {
  return {
    type: "CHECKOUT",
    payload
  };
};
const initialState = {
  products: [],
  cartProducts: [],
  displayCart: false,
  cartCount: 0,
  totalPrice: 0
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      state.cartProducts[state.cartProducts.length] = payload;
      return { ...state, cartProducts: [...state.cartProducts] };

    case "DELETE_PRODUCT":
      state.cartProducts.splice(payload, 1);
      return { ...state, cartProducts: [...state.cartProducts] };

    case "UPDATE_IN_PRODUCT":
      let index = parseInt(payload.split("-")[0]);
      let value = parseInt(payload.split("-")[1]);
      state.cartProducts[index].count = state.cartProducts[index].count + value;
      return { ...state, cartProducts: [...state.cartProducts] };

    case "RESETCOUNT_IN_PRODUCT":
      let i = parseInt(payload.split("-")[0]);
      let v = parseInt(payload.split("-")[1]);
      state.cartProducts[i].count = v;
      return { ...state, cartProducts: [...state.cartProducts] };

    case "GET_PRODUCTS":
      return { ...state, products: payload };
    // return { ...state, products: [...state.products, payload] }
    //[[], [productsArray]]

    case "TOTAL_PRICE":
      state.totalPrice = state.totalPrice + payload;
      // console.log(state.totalPrice);
      return { ...state, totalPrice: state.totalPrice };

    case "UPDATE_TOTAL_PRICE":
      state.totalPrice = payload;
      return { ...state, totalPrice: state.totalPrice };

    case "TOTAL_CART_COUNT":
      state.cartCount = state.cartCount + payload;
      return { ...state, cartCount: state.cartCount };

    case "UPDATE_CART_COUNT":
      state.cartCount = payload;
      return { ...state, cartCount: state.cartCount };

    case "CHECKOUT":
      return {
        ...state,
        cartProducts: [],
        displayCart: false,
        cartCount: 0,
        totalPrice: 0
      };

    case "CART_DISPLAY":
      return { ...state, displayCart: true };

    case "CART_HIDE":
      return { ...state, displayCart: false };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));
export default store;
