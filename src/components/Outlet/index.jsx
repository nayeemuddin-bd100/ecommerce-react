import React from 'react';
import Bg2 from '../../assets/img/bg-2.jpg';
import OutletHead from './OutletHead';

function Outlet() {
    return (
        <div className="bg-outletBg mt-10">
            <div className="flex justify-center items-center py-4 font-osygen flex-col mx-4">
                <OutletHead />
                {/* Outlet Main */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 justify-items-center py-1">
                    <div className="w-full relative">
                        <img className="w-full h-96 object-cover" src={Bg2} alt="background 2" />
                        <div className="absolute top-0 bottom-0 left-0 right-0 md:left-14 w-full flex flex-col justify-center gap-14 ml-10 md:ml-16">
                            <div className="">
                                <h2 className="text-red-400 text-lg">Deal of the Day.</h2>
                                <p className="text-gray-400 text-sm font-light">
                                    Limited quantities.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-base font-normal ">
                                    Brown faux fur longline coat
                                </p>
                                <h2 className="text-red-400 text-lg font-light">
                                    $310.00 <span className="text-gray-400 ml-2">Was $190.00</span>{' '}
                                </h2>
                                <button
                                    type="button"
                                    className="text-yellow-400 hover:text-yellow-700 border-b border-yellow-600 transition-all"
                                >
                                    {' '}
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div> Right side</div>
                </div>
                <button type="button">Shop More Outlet Deals →</button>
            </div>
        </div>
    );
}

export default Outlet;
