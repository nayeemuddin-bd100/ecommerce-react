import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function Layout({ children }) {
    const [navShow, setNavShow] = useState(false);

    return (
        <div>
            <Header navShow={navShow} setNavShow={setNavShow} />
            <Nav navShow={navShow} />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
