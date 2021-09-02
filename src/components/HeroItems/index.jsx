import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroTitles from './HeroTitles';

function HeroItems() {
    // const [added, setAdded] = useState(false);

    return (
        <div className="">
            {/* Hero Title Button */}
            <HeroTitles />
            {/* <div className="grid grid-rows-1 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                <HeroCarousel />
            </div> */}
            <HeroCarousel />
        </div>
    );
}

export default HeroItems;
