import React from 'react';
import Bg1 from '../../assets/img/bg-1.jpg';

function NewDeals() {
    return (
        <div>
            <div className="w-full relative font-osygen mx-4">
                <img className="w-full h-72 md:h-48 object-cover" src={Bg1} alt="Background  1" />{' '}
                <div className=" bg-white absolute top-2 left-2 right-2 bottom-2 text-gray-500 rounded  ">
                    <div className="h-full w-full  md:px-4 grid justify-center items-center text-center content-center md:grid-cols-3 ">
                        <div className=" md:border-r-4  md:border-gray-200   ">
                            <div className="flex justify-center flex-col md:items-end font-semibold mb-3 md:mr-8">
                                <h1 className="text-yellow-400 text-lg ">New Deals</h1>
                                <div className="flex justify-center md:flex-col md:items-end gap-1 text-xl text-gray-700 ">
                                    <h1>Start Daily at 12pm </h1>
                                    <h1> e.t.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify center items-center md:justify-start md:items-start md:pl-3 text-sm sm:text-lg md:text-base ">
                            <h1>
                                Get
                                <span className="text-black">FREE SHIPPING* & 5% rewards</span> on
                            </h1>
                            <p>every order with Molla Theme rewards program</p>
                        </div>

                        <div className="mt-3 md:mt-0">
                            <button
                                type="button"
                                className="bg-yellow-500 hover:bg-yellow-800 p-2 rounded-2xl text-white text-sm transition-all"
                            >
                                {' '}
                                Add to cart for $50.00/yr →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewDeals;
