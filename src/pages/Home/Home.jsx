import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeroItems from '../../components/HeroItems';
import NewDeals from '../../components/NewDeals/NewDeals';
import Outlet from '../../components/Outlet';

function Home() {
    return (
        <div>
            <Banner />

            {/* Hero Carousel */}
            <HeroItems />

            {/* New Deals Section */}
            <NewDeals />

            {/* Outlets Section */}
            <Outlet />
        </div>
    );
}

export default Home;
