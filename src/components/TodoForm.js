import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Edit item"
            value={input}
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button type="submit" className="todo-button edit">
            Update
          </button>{" "}
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button type="submit" className="todo-button">
            Save
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
