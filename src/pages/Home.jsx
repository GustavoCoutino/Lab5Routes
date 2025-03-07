import React from "react";

export const Home = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px 20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "26px",
        }}
      >
        Esta es la página de inicio del lab
      </h2>

      <p
        style={{
          color: "#555",
          fontSize: "18px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Estas son las instrucciones de lo que debe de tener:
      </p>

      <ol
        style={{
          backgroundColor: "#f8f8f8",
          padding: "25px 25px 25px 45px",
          borderRadius: "6px",
          margin: "0 auto",
          maxWidth: "600px",
        }}
      >
        <li
          style={{
            margin: "12px 0",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          Crear un ejemplo desde cero.
        </li>

        <li
          style={{
            margin: "12px 0",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          Crear diferentes vistas: login, homepage, dashboard por lo menos.
          (Header y Footer)
        </li>

        <li
          style={{
            margin: "12px 0",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          Administrar las vistas con el router.
        </li>

        <li
          style={{
            margin: "12px 0",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          Permitir iniciar sesión con datos fijos.
        </li>
      </ol>
    </div>
  );
};
