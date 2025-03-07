import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 50,
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "64px",
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "24px",
            }}
            aria-label="Menu"
          >
            <span
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#4b5563",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#4b5563",
                borderRadius: "2px",
                transition: "opacity 0.3s ease",
                opacity: isMenuOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#4b5563",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(7px, -6px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>
      </div>

      <div
        style={{
          display: isMenuOpen ? "block" : "none",
          backgroundColor: "white",
          padding: "16px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <NavLink
            to="/Login"
            style={{
              color: "#4b5563",
              textDecoration: "none",
              fontSize: "1rem",
              display: "block",
              padding: "12px 8px",
              borderRadius: "4px",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/Perfil"
            style={{
              color: "#4b5563",
              textDecoration: "none",
              fontSize: "1rem",
              display: "block",
              padding: "12px 8px",
              borderRadius: "4px",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Perfil
          </NavLink>
          <NavLink
            to="/Dashboard"
            style={{
              color: "#4b5563",
              textDecoration: "none",
              fontSize: "1rem",
              display: "block",
              padding: "12px 8px",
              borderRadius: "4px",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
