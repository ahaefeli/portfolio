'use client';
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from "./popups/modal";

export default function Home() {
  const [ showBeebank, setShowBeebank ] = useState(false)
  const [ showMaxiprecios, setShowMaxiprecios ] = useState(false)
  const [ showChat, setShowChat ] = useState(false)
  const [ showLey, setShowLey ] = useState(false)
  const [ hideAll, setHideAll ] = useState(false)
  const [ showBlack, setShowBlack ] = useState(false)

  useEffect(()=>{
    setShowBeebank(false)
    setShowMaxiprecios(false)
    setShowChat(false)
    setShowLey(false)

    setShowBlack(false)
  },[hideAll])

  return (<>

<Modal
        show={showBeebank}
        title="Beebank"
        description={["Prototipo de homebanking desarrollado como proyecto final en el ITBA, en colaboración con un equipo de 4 personas. El frontend fue implementado en Next.js y el backend en Django, utilizando SQLite como motor de base de datos.","El proyecto se completó en un plazo de 4 meses, integrando todas las funcionalidades requeridas, entre las cuales se incluyen:","• Transferencias entre usuarios.","• Gestión de múltiples cuentas en diferentes divisas.","• Elegibilidad para créditos bancarios.","• Emisión de tarjetas de crédito/débito en distintos niveles, cada uno con parámetros personalizados como comisiones y costos de mantenimiento."]}
        images={['/example.png','/example.png']}></Modal>

        <Modal
        show={showMaxiprecios}
        title="Maxiprecios"
        description={["Desarrollo de un servicio online de gestión de inventarios, diseñado para enfrentar los desafíos de la alta inflación en el comercio. Esta herramienta permite registrar y monitorear todos los productos de manera eficiente, con la capacidad de escanear automáticamente los sitios web de proveedores para recibir actualizaciones de precios en tiempo real, generando alertas automáticas ante la variación de precios.", "La aplicación fue diseñada para ser usada de manera completamente autónoma, pudiendo cada usuario gestionar su suscripción a la plataforma, añadir productos entre una base de datos de más de 6.000 disponibles y pudiendo agregar productos que se encuentren fuera del listado, para poder llevar el registro manualmente."]}
        images={['/example.png','/example.png']}></Modal>

        <Modal
        show={showChat}
        title="Chat"
        description={["Esta aplicación está diseñada para mejorar la comunicación entre comerciantes y clientes. Ofrece una interfaz intuitiva para gestionar usuarios, permitiendo al comerciante mantener un contacto fluido y organizado con su clientela. Además, cuenta con la funcionalidad de respuestas predeterminadas, facilitando la automatización de la comunicación y ahorro de tiempo.", "El sistema también incluye una herramienta para administrar las deudas de los clientes, con la posibilidad de visualizar el saldo pendiente en tiempo real. Esto proporciona una visión clara del estado financiero con cada cliente, optimizando la gestión de cobros y mejorando la eficiencia operativa."]}
        images={['/example.png','/example.png']}></Modal>

        <Modal
        show={showLey}
        title="Ley de Transparencia"
        description={["Desarrollé una página web destinada a recolectar firmas para un proyecto de ley que propone un sistema de registro detallado del gasto público. Esta ley exige que el Estado, en todas sus instancias (nacional, provincial, municipal y cualquier entidad que reciba fondos públicos), registre cada transacción financiera de manera transparente.Desarrollé una página web destinada a recolectar firmas para un proyecto de ley que propone un sistema de registro detallado del gasto público. Esta ley exige que el Estado, en todas sus instancias (nacional, provincial, municipal y cualquier entidad que reciba fondos públicos), registre cada transacción financiera de manera transparente.", "La plataforma que creé facilita la recolección de firmas de ciudadanos para presentar el proyecto ante el Congreso, requiriendo al menos 500.000 apoyos. La página explica los detalles del proyecto y recopila datos esenciales como correo electrónico, ciudad, provincia e IP del firmante para asegurar la validez de las firmas en el proceso de auditoría."]}
        images={['/example.png','/example.png']}></Modal>

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
            <p className={styles.p_tag}>Desde joven he sentido una profunda fascinación por el desarrollo, expandiendo mis intereses a áreas como finanzas y marketing. En 2023, obtuve una beca para el programa <a className={styles.highlighted}>Full Stack Developer</a> en el <a className={styles.highlighted}>Instituto Tecnológico de Buenos Aires (ITBA)</a>, donde adquirí una sólida formación en desarrollo web.</p>
            <p className={styles.p_tag}>Previo a esto, realicé cursos en <a className={styles.highlighted}>Marketing</a>, <a className={styles.highlighted}>Data Analytics</a> y <a className={styles.highlighted}>Data Science</a>, lo que me permitió valorar la importancia de los datos y me llevó a un interés por los algoritmos de predicción y el manejo de grandes volúmenes de datos.</p>
            <p className={styles.p_tag}>Actualmente, tras haber desarrollado diversos proyectos y con varios más en proceso, estoy en busca de un desafío profesional que me permita aplicar y ampliar mis conocimientos, contribuyendo al éxito de una empresa y adquiriendo nuevas habilidades en los campos de mi interés.</p>
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
            <div className={styles.cell} onClick={()=>{setShowMaxiprecios(true); setShowBlack(true)}}>
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
                <p className={styles.tech}>Python</p>
              </div>
            </div>
            <div className={styles.cell} onClick={()=>{setShowChat(true); setShowBlack(true)}}>
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
            <div className={styles.cell} onClick={()=>{setShowLey(true); setShowBlack(true)}}>
              <div className={styles.detail}>
                <p className={styles.cell_title}>Ley de Transparencia</p>
                <p className={styles.cell_text}>-</p>
                <p className={styles.cell_text}>Recolección de firmas</p>
              </div>
              <div className={styles.date}>
                <p className={styles.cell_description}>Página de recolección de firmas para un proyecto propio de Ley de transparencia</p>
              </div>
              <div className={styles.techs}>
                <p className={styles.tech}>Next.js</p>
                <p className={styles.tech}>Django</p>
                <p className={styles.tech}>SQLite</p>
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




          </main>

    </>);
}
