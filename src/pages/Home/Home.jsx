import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeroItems from '../../components/HeroItems';
import NewDeals from '../../components/NewDeals/NewDeals';

function Home() {
    return (
        <div className="mx-4">
            <Banner />

            {/* Hero Carousel */}
            <HeroItems />

            {/* New Deals Section */}
            <NewDeals />
        </div>
    );
}

export default Home;
