import React from "react";
import Task from "../task/Task";

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
