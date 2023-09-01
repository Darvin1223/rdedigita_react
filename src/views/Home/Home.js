// rsc
import React from 'react';
import Hero from '../../components/Hero/Hero';
import { LastNews } from '../../components/LastNews/LastNews';
import {SeccionNews} from "./../../components/SeccionNews/SeccionNews";
import { Test } from '../../test/test';
import './Home.scss';
import { Prueba } from '../../components/SeccionNews/prueba';

const Home = () => {
    return (
        <React.Fragment>
         <main className='main-container'>
            <Hero />
            <LastNews />
            {/* <SeccionNews />  */}
            <Prueba />
         </main>
        </React.Fragment>
         
    );
};

export {Home};