import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeroItems from '../../components/HeroItems';
import IconBox from '../../components/IconBox/IconBox';
import NewDeals from '../../components/NewDeals/NewDeals';
import Outlet from '../../components/Outlet';
import Sponsored from '../../components/Sponsored/Sponsored';
import Treanding from '../../components/Treanding/Treanding';

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

            {/* Treanding Product */}
            <Treanding title="Treanding Products" />

            {/* Top Selling Product */}
            <Treanding title="Top Selling Products" />

            {/* icon boxes */}
            <IconBox />
        </div>
    );
}

export default Home;
