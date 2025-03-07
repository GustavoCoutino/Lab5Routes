import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form
      onSubmit={onLogin}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          width: "100%",
          maxWidth: "350px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: "0 0 20px 0",
            color: "#333",
            fontSize: "24px",
          }}
        >
          Login
        </h2>

        <input
          type="text"
          name="user"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={onLogin}
          style={{
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "12px 20px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
            transition: "background-color 0.3s",
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
};
