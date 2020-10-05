import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h1>To Do List </h1>
      </div>
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onclick={() => dispatch({ type: "ADD_ITEM", payload: newTodo })}
        >
          Add Item
        </button>
        <button>Delete Item</button>
      </div>
    </form>
  );
};

export default Todo;
