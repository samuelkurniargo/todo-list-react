import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todoId) {
          return newValue;
        }
        return item;
      })
    );

    // setTodos((prev) =>
    //   prev.map((item) => (item.id === todoId ? newValue : item))
    // );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    let deleteArr = [...todos].filter((todo) => todo.id !== id);
    // console.log(updateTodos);
    setTodos(deleteArr);
  };

  return (
    <div>
      <h1>Hal yang ingin di kerjakan</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        editTodo={editTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoList;
