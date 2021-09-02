/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeroCarousel from '../HeroItems/HeroCarousel';

function Treanding({ title }) {
    const [productRoute, setProductRoute] = useState('all');

    return (
        <div className="mx-4 py-5 font-osygen ">
            <div className="flex flex-col justify-center items-center">
                <div className=" py-5 flex justify-center lg:justify-between items-center flex-col lg:flex-row w-full">
                    <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
                    <div className="flex flex-row gap-5 mt-5 lg:mt-0 flex-wrap justify-center">
                        <button
                            type="button"
                            className={`text-gray-400 hover:text-yellow-400 text-base uppercase font-normal transition duration-400 ease-in-out ${
                                productRoute === 'all'
                                    ? 'border-b border-yellow-500 text-yellow-500'
                                    : ''
                            } `}
                            onClick={() => setProductRoute('all')}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className={`text-gray-400 hover:text-yellow-400 text-base uppercase font-normal transition duration-400 ease-in-out ${
                                productRoute === 'electronics'
                                    ? 'border-b border-yellow-500 text-yellow-500'
                                    : ''
                            } `}
                            onClick={() => setProductRoute('electronics')}
                        >
                            electronics
                        </button>
                        <button
                            type="button"
                            className={`text-gray-400 hover:text-yellow-400 text-base uppercase font-normal transition duration-400 ease-in-out ${
                                productRoute === 'jewelery'
                                    ? 'border-b border-yellow-500 text-yellow-500'
                                    : ''
                            } `}
                            onClick={() => setProductRoute('jewelery')}
                        >
                            jewelery
                        </button>
                        <button
                            type="button"
                            className={`text-gray-400 hover:text-yellow-400 text-base uppercase font-normal transition duration-400 ease-in-out ${
                                productRoute === 'men clothing'
                                    ? 'border-b border-yellow-500 text-yellow-500'
                                    : ''
                            } `}
                            onClick={() => setProductRoute('men clothing')}
                        >
                            men&apos;s clothing
                        </button>
                        <button
                            type="button"
                            className={`text-gray-400 hover:text-yellow-400 text-base uppercase font-normal transition duration-400 ease-in-out ${
                                productRoute === 'women clothing'
                                    ? 'border-b border-yellow-500 text-yellow-500'
                                    : ''
                            } `}
                            onClick={() => setProductRoute('women clothing')}
                        >
                            women&apos;s clothing
                        </button>
                    </div>
                </div>
            </div>
            <HeroCarousel />
        </div>
    );
}

export default Treanding;
