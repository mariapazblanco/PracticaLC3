import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleRegister = () => {
    if (username === "") {
      alert("Usuario inválido para registrarse");
    } else if (username.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>Nombre de usuario: {username}</p>
      <p>{message}</p>
    </div>
  );
}

export default Login;
