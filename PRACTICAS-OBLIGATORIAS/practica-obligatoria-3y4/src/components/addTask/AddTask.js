import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleAdd = () => {
    if (newTaskText.trim() !== "") {
      onAddTask(newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Agregar tarea</button>
    </div>
  );
}

export default AddTask;
