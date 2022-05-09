import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { createStore } from "redux";
import holatlar from "../redux/Reducers";
import { inc, dec } from "../redux/Action.js";
const store = createStore(holatlar);
const { dispatch, getState } = store;
function App() {
  const incrementClick = () => {
    dispatch(inc());
    document.querySelector(".nol").textContent = getState().value;
  };
  const decrementClick = () => {
    dispatch(dec());
    document.querySelector(".nol").textContent = getState().value;
  };

  console.log(store);
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
            onClick={incrementClick}
            className="btn btn-dark me-2"
            id="increment"
          >
            Increment -
          </button>
          <button
            onClick={decrementClick}
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
