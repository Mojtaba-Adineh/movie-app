import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from '../../routes/Routers';
import MobileMenu from '../mobile-menu/MobileMenu';

const Layout = () => {
    return (
        <>
            <Header/>
            <MobileMenu/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;