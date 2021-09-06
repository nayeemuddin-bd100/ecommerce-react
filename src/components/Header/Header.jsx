import { HeartIcon, MenuAlt1Icon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Header({ navShow, setNavShow }) {
    return (
        <div div className="bg-navBg sticky top-0 z-50 sm:static">
            <div className="flex justify-between items-center p-2 text-white text-lg md:mx-8 ">
                {/* menu Icon */}

                <MenuAlt1Icon
                    className={`w-8 sm:hidden transition duration-700 ease-in-out ${
                        navShow ? 'block' : 'hidden'
                    }`}
                    onClick={() => setNavShow(!navShow)}
                />

                <MenuIcon
                    className={`w-8 sm:hidden transition duration-700 ease-in-out ${
                        !navShow ? 'block' : 'hidden'
                    }`}
                    onClick={() => setNavShow(!navShow)}
                />

                {/* logo */}
                <div className="font-body text-2xl font-bold">
                    <span className="text-4xl text-yellow-500 font-bold">E</span>
                    commerce
                </div>

                {/* search bar */}
                <span className="hidden sm:block w-2/4">
                    <SearchBar />
                </span>

                {/* side header */}
                <div className=" flex flex-row justify-center items-center gap-x-5 sm:gap-x-8 mr-5 md:mr-0 ">
                    <Link to="/wishlist" className="relative ">
                        <HeartIcon className="w-8" />
                        <h2 className="absolute top-0 right-0  -mt-2 -mr-3 bg-yellow-400 text-xs rounded-full flex justify-center items-center px-2 py-1 text-black">
                            <span>0</span>
                        </h2>
                    </Link>
                    <Link to="/cart" className="relative">
                        <ShoppingCartIcon className="w-8" />
                        <h2 className="absolute top-0 right-0  -mt-2 -mr-3 bg-yellow-400 text-xs rounded-full flex justify-center items-center px-2 py-1 text-black">
                            <span>0</span>
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
