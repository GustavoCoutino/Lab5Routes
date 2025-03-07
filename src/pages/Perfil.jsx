import React from "react";

export const Perfil = () => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        maxWidth: "300px",
        margin: "20px auto",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 15px auto",
          fontSize: "24px",
          color: "#555",
        }}
      >
        GCO
      </div>
      <h2
        style={{
          margin: "0 0 5px 0",
          color: "#333",
          textAlign: "center",
        }}
      >
        Gustavo Coutiño
      </h2>
      <p
        style={{
          margin: "0 0 10px 0",
          color: "#666",
          textAlign: "center",
        }}
      >
        Edad: 21
      </p>
      <p
        style={{
          margin: "0",
          color: "#666",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Computer Science
      </p>
    </div>
  );
};
