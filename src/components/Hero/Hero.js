import React from 'react';
import { News } from './../News/News';
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
                    <h3 className='hero_slider--title'>El sacerdocio del entrenador</h3>
                    <Btn url={"#"} text={"Ver mas"}> </Btn>

                </section>
            </section>
        </section>
    );
};

export default Hero;