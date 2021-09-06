import React from 'react';
import DemoProduct from '../assets/img/demo-product.jpg';
import ProductCard from '../components/ProductCard/ProductCard';

function ProductDetails() {
    return (
        <div className="mx-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-7 grid-rows-1 text-gray-600 border-b border-gray-200 pb-4">
                <div className="sm:col-span-3">
                    <div>
                        <img className="w-full" src={DemoProduct} alt="Demo Product" />
                    </div>
                </div>
                <div className="sm:col-span-4 mt-5">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-gray-800 text-2xl">
                            NewTop Microsoft – Refurbish Xbox One 500GB
                        </h2>
                        <h2 className="text-gray-400 text-sm mt-4">Rating (4.3)</h2>
                        <h2 className="text-yellow-400 text-2xl mt-3 font-normal">$279.99</h2>
                        <p className="text-sm font-normal text-gray-600 mt-3 ">
                            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.
                            Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                            felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus
                            eu,{' '}
                        </p>
                        <div className="flex justify-center items-center mt-4">
                            <p> Qty: </p>
                            <div className="border border-gray-400 px-5 py-1 flex ml-4">
                                <h2 className="cursor-pointer">-</h2>
                                <h2 className="mx-5">1</h2>
                                <h2 className="cursor-pointer">+</h2>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="mt-4 border border-yellow-500 px-4 py-2 text-yellow-400 hover:bg-yellow-500 hover:text-white transition duration-700 ease-in-out"
                            >
                                Add To Cart
                            </button>
                            <button
                                type="button"
                                className="mt-4 border-b border-yellow-500 hover:text-yellow-400 transition duration-500 ease-in-out ml-5 text-sm"
                            >
                                ❤ Go To Wishlist
                            </button>
                        </div>
                        <div className="text-gray-600 text-sm mt-4 ">
                            <h2>
                                Category: <span>Accessories</span>{' '}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-gray-600 text-3xl py-4 mt-2 text-center"> You May Also Like</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-start items-center gap-1 mt-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
