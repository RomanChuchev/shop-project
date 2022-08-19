import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
  alertNameBye: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", data });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.closeAlertBye = () => {
    dispatch({ type: "CLOSE_ALERT_BYE" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", itemId });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.clearGoods = () => {
    dispatch({ type: "CLEAR_GOODS" });
  };

  value.plusQuantity = (itemId) => {
    dispatch({ type: "PLUS_QUANYITY", itemId });
  };

  value.minusQuantity = (itemId) => {
    dispatch({ type: "MINUS_QUANYITY", itemId });
  };

  value.addToBusket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", item });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
