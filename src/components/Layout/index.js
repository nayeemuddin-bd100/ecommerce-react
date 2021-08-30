import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <Nav />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
