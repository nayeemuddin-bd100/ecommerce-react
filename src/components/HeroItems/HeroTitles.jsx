import React from 'react';

function HeroTitles() {
    return (
        <div className="flex justify-center items-center gap-8 sm:gap-12 text-gray-400  font-osygen font-medium my-5 text-2xl sm:text-3xl ">
            <button type="button" className="hover:text-gray-800 transition-all">
                Fetured
            </button>
            <button type="button" className="hover:text-gray-800 transition-all">
                On Sale
            </button>
            <button type="button" className="hover:text-gray-800 transition-all">
                Top Rated
            </button>
        </div>
    );
}

export default HeroTitles;
