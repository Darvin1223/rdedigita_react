// rsc
import React from 'react';
import Hero from '../../components/Hero/Hero';
import { LastNews } from '../../components/LastNews/LastNews';

import { Test } from '../../test/test';
import './Home.scss';
import { Prueba } from '../../components/SeccionNews/prueba';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';

const Home = () => {
    return (
        <React.Fragment>
         <main className='main-container'>
            {/* <Hero /> */}
            <BannerSlider />
            <LastNews />
           
            <Prueba />
         </main>
        </React.Fragment>
         
    );
};

export {Home};