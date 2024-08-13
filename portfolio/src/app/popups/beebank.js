import styles from './popups.module.css'

export default function Beebank( props ){

    return (
        <div className={`${styles.popup} ${props.show?styles.show:styles.hide}`}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.images_slider}>
                {props.images.map((image, index)=>(<img src={image} key={index} className={styles.image}></img>))}
            </div>
        </div>
    )
}