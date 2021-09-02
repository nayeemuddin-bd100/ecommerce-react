import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeroItems from '../../components/HeroItems';
import NewDeals from '../../components/NewDeals/NewDeals';
import Outlet from '../../components/Outlet';
import Sponsored from '../../components/Sponsored/Sponsored';

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

            {/* Sponsored Section */}
            <Sponsored />
        </div>
    );
}

export default Home;
