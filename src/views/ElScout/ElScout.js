import React from 'react';
import img_mantenimiento from "./../../assets/img/Views_img/ElScout_mantenimiento.png";
import "./ElScout.scss";
const ElScout = () => {
    const styles = {
        background_img: img_mantenimiento
    }

    return (
        <section className='ElScout-View' style={{ backgroundImage: `url(${styles.background_img})` }}>
            {/* Your content goes here */}
        </section>
    );
};

export { ElScout };
