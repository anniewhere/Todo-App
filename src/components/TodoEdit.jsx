import React, { useState } from "react";

export default function TodoEdit({ todos, setTodos, setTodoEditing, item }) {
  const [editingText, setEditingText] = useState("");

  const editText = (id) => {
    const updatedTodos = [...todos].map((elem) => {
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
  );
}
