import React from 'react';
import {Header} from './partials/Header/Header';
import Footer from './partials/Footer/Footer';
import { useTheme } from './../Context/ThemeContext';
import "./Layout.scss";
import { ModelSearch } from '../components/ModalSearch/ModelSearch';
const Layout = ({ children }) => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className='Layout'>
            <ModelSearch stado = {false}/>
            <Header isDarkMode={isDarkMode} />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };
