import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../css/Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          Home
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles.navLinksContainer} ${
          isMenuOpen ? styles.navLinksOpen : ""
        }`}
      >
        <div className={styles.navLinks}>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/Perfil"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Perfil
          </NavLink>
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
