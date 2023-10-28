import React, { useState } from "react";
import Login from "./components/login/Login";
import TaskList from "./components/taskList/TaskList";
import AddTask from "./components/addTask/AddTask";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Lista de Tareas</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
          <AddTask onAddTask={handleAddTask} />
        </div>
      ) : (
        <div>
          <h1>Inicio de Sesión</h1>
          <Login />
          <button onClick={handleLogin}>Iniciar sesion</button>
        </div>
      )}
    </div>
  );
}

export default App;
