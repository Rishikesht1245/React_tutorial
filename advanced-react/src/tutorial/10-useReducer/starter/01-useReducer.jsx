import React from "react";
import { data } from "../../../data";
import { useReducer, useState } from "react";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import reducer from "./reducer";

const defaultState = { people: data, isLoading: false };

const ReducerBasics = () => {
  // useReducers returns a state and a dispatch array
  // dispatch is used for making the action and it then goes through the reducer function
  // whatever the reducer function return it will be there in the state.
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearItem = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetItem = () => {
    dispatch({ type: RESET_LIST });
  };

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItem}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          onClick={clearItem}
          style={{ marginTop: "2rem" }}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
