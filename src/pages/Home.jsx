import styles from "../css/Home.module.css";

export const Home = () => {
  return (
    <div className={styles.divHome}>
      <h2>Esta es la página de inicio del lab</h2>

      <p>Estas son las instrucciones de lo que debe de tener:</p>

      <ol>
        <li>Crear un ejemplo desde cero.</li>

        <li>
          Crear diferentes vistas: login, homepage, dashboard por lo menos.
          (Header y Footer)
        </li>

        <li>Administrar las vistas con el router.</li>

        <li>Permitir iniciar sesión con datos fijos.</li>
      </ol>
    </div>
  );
};
