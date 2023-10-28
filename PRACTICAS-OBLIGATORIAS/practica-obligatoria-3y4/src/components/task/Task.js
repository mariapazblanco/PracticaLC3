import React from "react";

function Task({ task, onToggleComplete, onDeleteTask }) {
  const taskStyle = {
    textDecoration: task.completed ? "line-through" : "none",
  };

  return (
    <li style={taskStyle}>
      {task.text}
      <button onClick={() => onToggleComplete(task.id)}>Completar</button>
      <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default Task;
