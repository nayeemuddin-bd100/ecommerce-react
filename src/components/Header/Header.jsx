import { HeartIcon, MenuAlt1Icon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Header({ navShow, setNavShow }) {
    return (
        <div div className="bg-navBg">
            <div className="flex justify-between items-center p-2 text-white text-lg md:mx-8 ">
                {/* menu Icon */}
                {navShow ? (
                    <MenuAlt1Icon
                        className="w-8 sm:hidden transition-all "
                        onClick={() => setNavShow(!navShow)}
                    />
                ) : (
                    <MenuIcon
                        className="w-8 sm:hidden transition-all "
                        onClick={() => setNavShow(!navShow)}
                    />
                )}

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
                <div className=" flex flex-row justify-center items-center gap-x-3">
                    <HeartIcon className="w-8" />
                    <ShoppingCartIcon className="w-8" />
                </div>
            </div>
        </div>
    );
}

export default Header;
