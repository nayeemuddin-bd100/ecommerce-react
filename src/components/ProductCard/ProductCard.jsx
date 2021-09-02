import { HeartIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import DemoProduct from '../../assets/img/demo-product.jpg';

export default function ProductCard() {
    const [added, setAdded] = useState(false);
    return (
        <div className="relative sm:mx-1 md:mx-2 ">
            <div className="group border border-gray-200 flex flex-col justify-center items-center rounded-lg overflow-hidden  ">
                <img className="w-full h-48 my-3 object-cover " src={DemoProduct} alt="Product 1" />

                <div className="w-full overflow-hidden">
                    <button
                        type="button"
                        className="bg-yellow-500 hover:bg-yellow-700 text-white  py-1 w-full  transition-all duration-700 ease-in-out  rounded-t-sm transform translate-y-10 group-hover:translate-y-0 "
                    >
                        Add to Cart
                    </button>
                </div>
                {/* card details */}
                <div className="flex flex-col mx-4 gap-1 font-osygen  overflow-hidden ">
                    <p className="text-gray-400 text-sm "> Entertainment , TV</p>
                    <p className="text-base font-normal hover:text-yellow-500 transition-all">
                        {' '}
                        Apple - Watch Series 3 with White Sport Band{' '}
                    </p>
                    <h3 className="text-base text-yellow-500"> $214.99 </h3>
                    <p className="text-xs text-gray-400 mb-3">( Rating : 4.3 )</p>
                </div>
            </div>

            {/* wishlist Button */}
            <div className="group absolute top-3 right-4 bg-yellow-500 rounded-full  p-2 gap-1 text-xs  transition-all ">
                <button
                    onClick={() => setAdded(!added)}
                    type="button"
                    className="flex justify-center items-center"
                >
                    <span className="mx-2 hidden group-hover:block ">Add to whishlist</span>

                    <HeartIcon
                        className={`w-5 ${added ? 'fill-current text-black object-fill' : ''}`}
                    />
                </button>
            </div>
        </div>
    );
}
