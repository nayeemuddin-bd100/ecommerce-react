// eslint-disable-next-line prettier/prettier
import { InformationCircleIcon, RefreshIcon, SupportIcon, TrendingUpIcon } from '@heroicons/react/outline';
import React from 'react';

function IconBox() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 py-6">
            <div className="flex flex-row gap-4 justify-center items-center">
                <div>
                    <TrendingUpIcon className="my-5 lg:my-0 w-full h-10 text-gray-700 object-fill" />
                </div>
                <div className="">
                    <h2 className="font-semibold text-xl text-gray-700">Free Shipping</h2>
                    <p className="text-gray-600 text-sm font-light">Oreder $50 or more</p>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
                <div>
                    <RefreshIcon
                        className="my-5 lg:my-0 text-gray-700 object-fill w-full h-10"
                        fill="white"
                    />
                </div>
                <div className="">
                    <h2 className="font-semibold text-xl text-gray-700">Free Returns</h2>
                    <p className="text-gray-600 text-sm font-light">within 30 days</p>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
                <div>
                    <InformationCircleIcon className=" my-5 lg:my-0 text-gray-700 object-fill w-full h-10" />
                </div>
                <div className="">
                    <h2 className="font-semibold text-xl text-gray-700">Get 20% Off 1 Item</h2>
                    <p className="text-gray-600 text-sm font-light">When you sign up</p>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
                <div>
                    <SupportIcon className="my-5 lg:my-0 text-gray-700 object-fill w-full h-10" />
                </div>
                <div className="">
                    <h2 className="font-semibold text-xl text-gray-700">We Support</h2>
                    <p className="text-gray-600 text-sm font-light">24/7 amazing services</p>
                </div>
            </div>
        </div>
    );
}

export default IconBox;
