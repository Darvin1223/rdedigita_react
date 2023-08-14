import React from 'react';
import {Header} from './partials/Header/Header';
import Footer from './partials/Footer/Footer';
import { useTheme } from './../Context/ThemeContext';

const Layout = ({ children }) => {
    const { isDarkMode } = useTheme();
    
    return (
        <div>
            <Header isDarkMode={isDarkMode} />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };
