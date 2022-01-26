import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);

    setInputValue("");
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
