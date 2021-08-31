import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function SearchBar() {
    return (
        <div className="flex flex-row justify-items-start items-center p-2 text-gray-400 rounded-full bg-white text-sm ">
            <SearchIcon className="w-4 text-gray-900 mx-2" />
            <input
                className="border-none outline-none w-72 "
                type="search"
                placeholder="Search Products..."
            />
        </div>
    );
}

export default SearchBar;
