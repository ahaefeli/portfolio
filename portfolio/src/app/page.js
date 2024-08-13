'use client';
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Beebank from "./popups/beebank";

export default function Home() {
  const [ showBeebank, setShowBeebank ] = useState(false)
  const [ hideAll, setHideAll ] = useState(false)
  const [ showBlack, setShowBlack ] = useState(false)

  useEffect(()=>{
    setShowBeebank(false)

    setShowBlack(false)
  },[hideAll])

  return (<>

        <Beebank
        show={showBeebank}
        title="Beebank"
        description={["Homebanking"]}
        images={['/example.png','/example.png']}></Beebank>

        <div className={`${styles.black} ${showBlack?styles.show_black:styles.hide_black}`} onClick={()=>{setHideAll(!hideAll)}}></div>


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
          <section className={styles.about}>
            <label className={styles.section_title}>Sobre Mí</label>
            <p className={styles.p_tag}>Desde chico sentí una gran fascinación por el mundo del desarrollo, y con el tiempo fui expandiendo mis intereses a otras áreas, como las finanzas y el marketing. En 2023 pude conseguir una beca para el programa <a className={styles.highlighted}>Full Stack Developer</a> en el <a className={styles.highlighted}>Instituto Tecnológico de Buenos Aires (ITBA)</a>, donde profundicé enormemente mis conocimientos en cuanto al desarrollo web.</p>
            <p className={styles.p_tag}>Anteriormente, había realizado cursos de <a className={styles.highlighted}>Marketing</a>, <a className={styles.highlighted}>Data Analytics</a> y <a className={styles.highlighted}>Data Science</a>, donde logré apreciar la importancia de los datos hoy en día, lo que generó en mí un interés por los algoritmos de predicción y el manejo de grandes volúmenes de datos.</p>
            <p className={styles.p_tag}>Hoy, luego de haber desarrollado varios proyectos por mi cuenta, y con varios más pendientes, me encuentro en busca de un desagío que me permita agregar valor a una empresa aplicando y desarrollando mis conocimientos al mismo tiempo que adquiero nuevas herramientas para progresar profesionalmente en los campos de mi interés.</p>
          </section>


          <section className={styles.cells_container}>
            <label className={styles.section_title}>Formación</label>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Full Stack Developer</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>ITBA</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Programa de 4 meses centrado en Next.js y Django</p>
                <p className={styles.cell_date}>2024</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Tecnicatura Universitaria en Programación</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>UTN</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Tecnicatura de 2 años en la Universidad Tecnológica Nacional</p>
                <p className={styles.cell_date}>2024-2026</p>
              </div>
            </div>
          </section>

          <section className={styles.cells_container}>
            <label className={styles.section_title}>Experiencia</label>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Ayudante Administrativo</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Despensa Leo</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>- Optimización de planillas para el registro de ventas</p>
                <p className={styles.cell_description}>- Control de stock de mercadería</p>
                <p className={styles.cell_description}>- Atención al público</p>
                <p className={styles.cell_description}>- Manejo de caja</p>
                <p className={styles.cell_date}>2018-actualidad</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Herrero ayudante</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Herrería LDA</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>- Trabajos en hierro</p>
                <p className={styles.cell_description}>- Soldaduras</p>
                <p className={styles.cell_description}>- Pintado y esmaltado</p>
                <p className={styles.cell_description}>- Colocación de aberturas</p>
                <p className={styles.cell_date}>2021-2022</p>
              </div>
            </div>
          </section>

          <section className={styles.cells_container}>
            <label className={styles.section_title}>Proyectos</label>
            <div className={styles.cell} onClick={()=>{setShowBeebank(true); setShowBlack(true)}}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Beebank</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Homebanking</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Prototipo de homebanking realizado con un equipo de trabajo de 4 personas</p>
              </div>
              <div className={styles.techs}>
                <p className={styles.tech}>Next.js</p>
                <p className={styles.tech}>Django</p>
                <p className={styles.tech}>SQLite</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Maxiprecios</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Registro de mercadería</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Servicio de registro de mercadería con alertas de cambios de precios en tiempo real</p>
              </div>
              <div className={styles.techs}>
                <p className={styles.tech}>Next.js</p>
                <p className={styles.tech}>Django</p>
                <p className={styles.tech}>SQLite</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Chat</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>App de mensajería</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Aplicación web de mensajería para comerciantes que automatiza la comunicación con clientes y el envío de información de pagos</p>
              </div>
              <div className={styles.techs}>
                <p className={styles.tech}>Next.js</p>
                <p className={styles.tech}>Django</p>
                <p className={styles.tech}>SQLite</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Ley de Transparencia</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Recolección de firmas</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Página de recolección de firmas para un proyecto de Ley de transparencia</p>
              </div>
              <div className={styles.techs}>
                <p className={styles.tech}>Next.js</p>
                <p className={styles.tech}>Django</p>
                <p className={styles.tech}>SQLite</p>
              </div>
            </div>
          </section>
          </main>

    </>);
}
