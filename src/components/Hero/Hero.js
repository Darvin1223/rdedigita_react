import React from 'react';

import sr from './../../assets/img/sr.png';
import './Hero.scss';
import Btn from '../Btn/Btn';

const Hero = () => {
    return (
        <section className='Hero'>
            <section className='hero_news'>
                {/* <News /> */}
            </section>
            <section className='hero_slider'>
                <picture className='hero_slider_img'>
                    <img src={sr} className='hero_slider_img--img'/>
                </picture>
                <section className='hero_slider_textContainer'>
                    <h2 className='hero_slider--title'>El sacerdocio del entrenador</h2>
                    <Btn url={"#"} text={"Ver mas"}> </Btn>

                </section>
            </section>
        </section>
    );
};

export default Hero;