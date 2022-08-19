export function reducer(state, { type, data, item, itemId }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: data || [],
        loading: false,
      };
    case "ADD_TO_BASKET":
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === item.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...item,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: item.name,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "CLOSE_ALERT_BYE":
      return {
        ...state,
        alertNameBye: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== itemId),
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "CLEAR_GOODS":
      return {
        ...state,
        alertNameBye: "Close",
        order: [],
      };
    case "PLUS_QUANYITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === itemId) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        }),
      };
    case "MINUS_QUANYITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === itemId && el.quantity > 0) {
            return {
              ...el,
              quantity: el.quantity - 1,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
