import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoEdit from "./TodoEdit";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className="todo-container">
        {todos.map((item) => (
          <div key={item.id}>
            {todoEditing === item.id ? (
              <TodoEdit
                todos={todos}
                setTodos={setTodos}
                setTodoEditing={setTodoEditing}
                item={item}
              />
            ) : (
              <Todo
                todos={todos}
                setTodos={setTodos}
                setTodoEditing={setTodoEditing}
                item={item}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
