import styles from "./home.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (<>

        <header className={styles.left_container}>
          <div className={styles.upper_container}>
            <h1 className={styles.name}>Agustín Haefeli</h1>
            <h2 className={styles.subtitle}>Fullstack Developer</h2>
            <label className={styles.description}>Estudiante de «Tecnicatura Universitaria en Programación» en la <a className={styles.highlighted}>Universidad Tecnológica Nacional (UTN)</a></label>
          </div>
          <div className={styles.icons_container}>
            <i className="bi-linkedin"></i>
            <i className="bi-github"></i>
            <i className="bi-whatsapp"></i>
            <i className="bi-envelope"></i>
          </div>
        </header>
      
        <main className={styles.right_container}>
          <p className={styles.p_tag}>Desde chico sentí una gran fascinación por el mundo del desarrollo, y con el tiempo fui expandiendo mis intereses a otras áreas, como las finanzas y el marketing. En 2023 pude conseguir una beca para el programa <a className={styles.highlighted}>Full Stack Developer</a> en el <a className={styles.highlighted}>Instituto Tecnológico de Buenos Aires (ITBA)</a>, donde profundicé enormemente mis conocimientos en cuanto al desarrollo web.</p>
          <p className={styles.p_tag}>Anteriormente, había realizado cursos de <a className={styles.highlighted}>Marketing</a>, <a className={styles.highlighted}>Data Analytics</a> y <a className={styles.highlighted}>Data Science</a>, donde logré apreciar la importancia de los datos hoy en día, lo que generó en mí un interés por los algoritmos de predicción y el manejo de grandes volúmenes de datos.</p>
          <p className={styles.p_tag}>Hoy, luego de haber desarrollado varios proyectos por mi cuenta, y con varios más pendientes, me encuentro en busca de un desagío que me permita agregar valor a una empresa aplicando y desarrollando mis conocimientos al mismo tiempo que adquiero nuevas herramientas para progresar profesionalmente en los campos de mi interés.</p>
          <i className="bi-chevron-down"></i>
          <p className={styles.p_tag}>Hoy, luego de haber desarrollado varios proyectos por mi cuenta, y con varios más pendientes, me encuentro en busca de un desagío que me permita agregar valor a una empresa aplicando y desarrollando mis conocimientos al mismo tiempo que adquiero nuevas herramientas para progresar profesionalmente en los campos de mi interés.</p>
          <p className={styles.p_tag}>Hoy, luego de haber desarrollado varios proyectos por mi cuenta, y con varios más pendientes, me encuentro en busca de un desagío que me permita agregar valor a una empresa aplicando y desarrollando mis conocimientos al mismo tiempo que adquiero nuevas herramientas para progresar profesionalmente en los campos de mi interés.</p>
          <p className={styles.p_tag}>Hoy, luego de haber desarrollado varios proyectos por mi cuenta, y con varios más pendientes, me encuentro en busca de un desagío que me permita agregar valor a una empresa aplicando y desarrollando mis conocimientos al mismo tiempo que adquiero nuevas herramientas para progresar profesionalmente en los campos de mi interés.</p>
          </main>

    </>);
}
