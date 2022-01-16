import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <img
        className="app-img"
        src="https://images.unsplash.com/photo-1568399032147-1011aa65f85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="app background"
      />
      <h3>What's the Plan for today?</h3>
      <TodoList />
    </div>
  );
}
