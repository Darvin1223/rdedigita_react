import React from 'react';
import Header from './partials/Header/Header';
import Footer from './partials/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export {Layout};