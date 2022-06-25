import React, { useState } from "react";
import IconEdit from "../assets/icons/icon_edit.png";
import IconDelete from "../assets/icons/icon_delete.png";
import TodoForm from "./TodoForm";

function Todo({ todos, editTodo, completeTodo, deleteTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <span className="editItem">
          <img
            src={IconEdit}
            alt="edit icon"
            onClick={() =>
              setEdit({
                id: todo.id,
                value: todo.text,
              })
            }
          />
        </span>
        <span className="deleteItem">
          <img
            src={IconDelete}
            alt="delete icon"
            onClick={() => deleteTodo(todo.id)}
          />
        </span>
      </div>
    </div>
  ));
}

export default Todo;
