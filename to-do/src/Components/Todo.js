import React from "react";

function Todo({ todo, toggleComplete }) {
  function handleClick() {
    toggleComplete(todo.id);
  }

  return (
      <li style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
        <button className="AsText" onClick={handleClick}>Mark as Complete</button>
      </li>
  );
}
export default Todo;
