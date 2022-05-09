import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { createStore } from "redux";

const initialState = { value: 0, age: 20 };

function App() {
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

  const store = createStore(holatlar);

  return (
    <div className="App" style={{ marginLeft: "500px", marginTop: "50px" }}>
      <div className=" ui  container ">
        <div className="counter-div">
          <h1 className="counter">
            Counter:<span className="nol">0</span>
          </h1>
        </div>
        <div className="btns">
          <button
            onClick={() => {
              store.dispatch({ type: "INCREMENT" });
              document.querySelector(".nol").textContent =
                store.getState().value;
            }}
            className="btn btn-dark me-2"
            id="increment"
          >
            Increment -
          </button>
          <button
            onClick={() => {
              store.dispatch({ type: "DECREMENT" });
              document.querySelector(".nol").textContent =
                store.getState().value;
            }}
            className="btn btn-danger"
            id="decrement"
          >
            Decrement +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
