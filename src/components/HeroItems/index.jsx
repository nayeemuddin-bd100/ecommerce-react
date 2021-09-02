import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroTitles from './HeroTitles';

function HeroItems() {
    // const [added, setAdded] = useState(false);

    return (
        <div className="mx-4">
            {/* Hero Title Button */}
            <HeroTitles />
            {/* Hero Carousel */}
            <HeroCarousel />
        </div>
    );
}

export default HeroItems;
