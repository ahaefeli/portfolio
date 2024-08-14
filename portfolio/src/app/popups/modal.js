import styles from './popups.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Modal( props ){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className={`${styles.popup} ${props.show?styles.show:styles.hide}`}>
            <div className={styles.left_container}>
                <h2 className={styles.title}>{props.title}</h2>
                {props.description.map((parragraph)=>(<p className={styles.description}>{parragraph}</p>))}
            </div>
            
            <div className={styles.right_container}>
            <Slider {...settings} className={styles.images_slider}>
                {props.images.map((image, index) => (
                        <img src={image} className={styles.image} alt={`Slide ${index}`} />
                ))}
            </Slider>
            </div>
            <div className={styles.button_container}>
                <a className={styles.galery_button}>Ver galería</a>
            </div>
        </div>
    )
}