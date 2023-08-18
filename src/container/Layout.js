import React from 'react';
import {Header} from './partials/Header/Header';
import Footer from './partials/Footer/Footer';
import { useTheme } from './../Context/ThemeContext';
import "./Layout.scss";
const Layout = ({ children }) => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className='Layout'>
            <Header isDarkMode={isDarkMode} />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };
