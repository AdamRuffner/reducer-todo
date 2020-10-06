import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";


const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setNewTodo('')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h1>To Do List: </h1>
        </div>
        <div>
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: newTodo })}
          >
            Add Item
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: state })}
          >
            Delete Item
          </button>
        </div>
      </form>
        <ul>
            {state.map(todo => (
                <li
                    className={todo.completed ? 'completed' : ''}
                    key = {todo.id}
                    onClick={() => dispatch({ type: "TOGGLE_ITEM", id: todo.id})}
                >
                    {todo.item}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Todo;
