import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BiCircle } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";

export default function Todo({ item, setTodoEditing, todos, setTodos }) {
  const toggleCompleted = (id) => {
    const updatedTodos = [...todos].map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((elem) => elem.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <div className={item.completed ? "todo-item completed" : "todo-item"}>
      <div className="text-container">
        {item.completed ? (
          <BiCheckCircle
            className="complete-icon done"
            onClick={() => toggleCompleted(item.id)}
          />
        ) : (
          <BiCircle
            className="complete-icon"
            onClick={() => toggleCompleted(item.id)}
          />
        )}

        <div className="todo-text">{item.text}</div>
      </div>
      <div className="icons">
        <FiEdit className="edit-icon" onClick={() => setTodoEditing(item.id)} />
        <RiDeleteBin6Line
          className="delete-icon"
          onClick={() => handleDelete(item.id)}
        />
      </div>
    </div>
  );
}
