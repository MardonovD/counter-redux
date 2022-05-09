const initialState = { value: 0, age: 20 };
import React from "react";

const holatlar = (store = initialState, actions) => {
  switch (actions.type) {
    case "DECREMENT":
      return {
        ...store,
        value: store.value + 1,
      };
    case "INCREMENT":
      return {
        ...store,
        value: store.value - 1,
      };
    default:
      return initialState;
  }
};

export default holatlar;
