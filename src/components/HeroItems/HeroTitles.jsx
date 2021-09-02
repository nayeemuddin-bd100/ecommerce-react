/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function HeroTitles() {
    const [productRoute, setProductRoute] = useState('featured');
    return (
        <div className="flex justify-center items-center gap-8 sm:gap-12 text-gray-400  font-osygen font-medium my-5 text-2xl sm:text-3xl ">
            <button
                onClick={() => setProductRoute('featured')}
                type="button"
                className={`hover:text-gray-800 transition duration-500 ease-in-out ${
                    productRoute === 'featured'
                        ? 'border-b-2 border-yellow-500 text-gray-800'
                        : null
                }`}
            >
                Featured
            </button>
            <button
                onClick={() => setProductRoute('on-sale')}
                type="button"
                className={`hover:text-gray-800 transition duration-500 ease-in-out ${
                    productRoute === 'on-sale' ? 'border-b-2 border-yellow-500 text-gray-800' : null
                }`}
            >
                On Sale
            </button>
            <button
                onClick={() => setProductRoute('top-rated')}
                type="button"
                className={`hover:text-gray-800 transition duration-500 ease-in-out ${
                    productRoute === 'top-rated'
                        ? 'border-b-2 border-yellow-500 text-gray-800'
                        : null
                }`}
            >
                Top Rated
            </button>
        </div>
    );
}

export default HeroTitles;
