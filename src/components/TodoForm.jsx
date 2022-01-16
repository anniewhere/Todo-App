import React, { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue || /^\s*$/.test(inputValue)) {
      return;
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false
      };

      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Walk the dog..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="task-btn" type="submit">
        +
      </button>
    </form>
  );
}
