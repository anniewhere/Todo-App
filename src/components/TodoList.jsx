import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  const addTodo = (inputValue) => {
    if (!inputValue || /^\s*$/.test(inputValue)) {
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false
      };

      const inputCheck = todos.filter((todo) => {
        return todo.text === inputValue;
      });

      if (inputCheck.length < 1) {
        setTodos([...todos, newTodo]);
      }
    }
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((elem) => elem.id !== id);

    setTodos(updatedTodos);
  };

  const toggleEditing = (id) => {
    setTodoEditing(id);
  };

  const editText = (id) => {
    const updatedTodos = todos.map((elem) => {
      if (elem.id === id && editingText.trim() !== "") {
        elem.text = editingText;
      }
      if (elem.completed === true) {
        elem.completed = !elem.completed;
      }
      return elem;
    });

    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <div className="scroll">
        <div className="todo-container">
          {todos.map((item) => (
            <div key={item.id}>
              {todoEditing === item.id ? (
                <form className="edit-form" onSubmit={() => editText(item.id)}>
                  <input
                    className="edit-field"
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button className="edit-btn" type="submit">
                    Edit
                  </button>
                </form>
              ) : (
                <Todo
                  item={item}
                  toggleCompleted={toggleCompleted}
                  handleDelete={handleDelete}
                  toggleEditing={toggleEditing}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
