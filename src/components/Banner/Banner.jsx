import React from 'react';
import Banner1 from '../../assets/img/banner-1.jpg';
import Banner2 from '../../assets/img/banner-2.jpg';
import Banner3 from '../../assets/img/banner-3.jpg';
import SlideBanner from '../../assets/img/slide-1.jpg';

function Banner() {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-3 md:gap-x-3 py-3 mx-4">
                <div className="md:col-start-1 md:col-end-3 relative">
                    <img
                        className="w-full h-96 object-cover "
                        src={SlideBanner}
                        alt="Slide Banner"
                    />
                    <div className="absolute flex flex-col justify-center items-start top-1/2 bottom-1/2 left-16 font-osygen ">
                        <p className="text-yellow-500 text-sm "> Daily Deals</p>
                        <h1 className="text-4xl sm:text-5xl font-medium text-gray-700">
                            {' '}
                            AirPods <br /> <span>Earphones</span>{' '}
                        </h1>
                        <div className="flex justify-start my-5">
                            <h3 className="text-lg">Today : </h3>
                            <h2 className="text-yellow-500 text-4xl font-medium"> $247</h2>
                            <h3 className="text-yellow-500 text-sm font-bold">.99</h3>
                        </div>
                        <button className="btn btn-yellow" type="button">
                            Click Here <span>→</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-row-3 gap-2 md:gap-0 md:justify-center md:content-between ">
                    <div className="relative">
                        <img
                            className="w-full h-28 object-cover rounded-lg "
                            src={Banner1}
                            alt="banner 1"
                        />
                        <div className="absolute top-0 bottom-0 left-4 mt-1 flex justify-start flex-col font-osygen">
                            <h3 className="text-sm text-gray-400 font-normal">Top Product</h3>
                            <h2 className="text-lg font-medium text-gray-700">
                                <span className="font-bold text-gray-900">Edifier</span> <br />{' '}
                                Stereo Bluetooth
                            </h2>
                            <button
                                className="bg-gray-300 hover:bg-yellow-400 transition-all px-5 rounded-lg"
                                type="button"
                            >
                                Shop Now <span>→</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="w-full h-28  object-cover rounded-lg "
                            src={Banner2}
                            alt="banner 2"
                        />

                        <div className="absolute top-0 bottom-0 left-4 mt-1 flex justify-start flex-col font-osygen">
                            <h3 className="text-sm text-gray-400 font-normal"> Clearance</h3>
                            <h2 className="text-lg font-medium text-gray-700">
                                <span className="font-bold text-gray-900">GoPro - Fusion 360</span>{' '}
                                <br /> Save $70
                            </h2>
                            <button
                                className="bg-gray-300 hover:bg-yellow-400 transition-all px-5 rounded-lg"
                                type="button"
                            >
                                Shop Now <span>→</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="w-full h-28 object-cover rounded-lg "
                            src={Banner3}
                            alt="banner 3"
                        />
                        <div className="absolute top-0 bottom-0 left-4 mt-1 flex justify-start flex-col font-osygen">
                            <h3 className="text-sm text-gray-400 font-normal">Fetured</h3>
                            <h2 className="text-lg font-medium text-gray-700">
                                <span className="font-bold text-gray-900">Apple Watch 4</span>{' '}
                                <br /> Our Hottest Deals
                            </h2>
                            <button
                                className="bg-gray-300 hover:bg-yellow-400 transition-all px-5 rounded-lg"
                                type="button"
                            >
                                Shop Now <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
