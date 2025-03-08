import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (username === "gustavo" && password === "123") {
      navigate("/perfil");
    }
  };
  return (
    <form className={styles.formContainer} onSubmit={onLogin}>
      <div className={styles.divContainer}>
        <h2 className={styles.loginTitle}>Login</h2>

        <input
          type="text"
          name="user"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={onLogin}>Send</button>
      </div>
    </form>
  );
};
