import React from "react";

export const Dashboard = () => {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
  ];
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        maxWidth: "600px",
      }}
    >
      <h2
        style={{
          margin: "0 0 20px 0",
          color: "#333",
        }}
      >
        Tabla de ejemplo de gráfica (no jalan las columnas)
      </h2>

      <div
        style={{
          height: "300px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          padding: "0 10px 30px 40px",
          borderLeft: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "20px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>{maxValue}</span>
          <span style={{ fontSize: "12px", color: "#666" }}>
            {Math.round(maxValue * 0.75)}
          </span>
          <span style={{ fontSize: "12px", color: "#666" }}>
            {Math.round(maxValue * 0.5)}
          </span>
          <span style={{ fontSize: "12px", color: "#666" }}>
            {Math.round(maxValue * 0.25)}
          </span>
          <span style={{ fontSize: "12px", color: "#666" }}>0</span>
        </div>

        {[0.25, 0.5, 0.75, 1].map((ratio) => (
          <div
            key={ratio}
            style={{
              position: "absolute",
              left: "40px",
              top: `${100 - ratio * 100}%`,
              width: "calc(100% - 40px)",
              borderTop: "1px dashed #e0e0e0",
              zIndex: 1,
            }}
          />
        ))}

        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <div
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                width: "40px",
                backgroundColor: "#8884d8",
                borderRadius: "4px 4px 0 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                {item.value}
              </div>
            </div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
