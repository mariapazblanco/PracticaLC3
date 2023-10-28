import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
    </div>
  );
}

export default TaskForm;
