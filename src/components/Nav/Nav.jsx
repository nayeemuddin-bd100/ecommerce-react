/* eslint-disable jsx-a11y/anchor-is-valid */
import { LightBulbIcon } from '@heroicons/react/outline';
import React from 'react';
import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';

function Nav({ navShow }) {
    return (
        <>
            {/* for small screen */}
            {navShow && (
                <div className="sm:hidden border-b border-gray-300 ">
                    <div className="py-1 font-osygen mx-2 my-2">
                        <div className="flex justify-between items-center">
                            <SearchBar />
                            <Login />
                        </div>

                        <div className="  gap-4 flex flex-col justify-center items-center">
                            <a className="transition-all hover:text-yellow-500" href="#">
                                Home
                            </a>
                            <a className="transition-all hover:text-yellow-500" href="#">
                                Shop
                            </a>
                            <a className="transition-all hover:text-yellow-500" href="#">
                                Blog
                            </a>
                            <a className="transition-all hover:text-yellow-500" href="#">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
            {/* for large screen */}

            <div className="hidden sm:block border-b border-gray-300 sticky top-0 bg-white z-50">
                <div className="py-1 font-osygen flex-row flex justify-between items-center mx-10">
                    <div className="  gap-4 flex flex-row justify-center items-center ">
                        <a className="transition-all hover:text-yellow-500" href="#">
                            Home
                        </a>
                        <a className="transition-all hover:text-yellow-500" href="#">
                            Shop
                        </a>
                        <a className="transition-all hover:text-yellow-500" href="#">
                            Blog
                        </a>
                        <a className="transition-all hover:text-yellow-500" href="#">
                            Contact
                        </a>
                    </div>
                    <span className="flex justify-center items-center mt-0">
                        <Login />
                    </span>
                    <div className="flex flex-row text-sm ">
                        <LightBulbIcon className="w-4 mx-1" />
                        <div>
                            {' '}
                            <span className="text-gray-400">Clearance</span> Up to 30% Off
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
