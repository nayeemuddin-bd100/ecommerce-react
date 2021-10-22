import React from 'react';
import ShopLeft from '../components/ShopComponents/ShopLeft';
import ShopRight from '../components/ShopComponents/ShopRight';
import ShopTop from '../components/ShopComponents/ShopTop';

function Shop() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 mx-4 font-osygen">
                <div className="md:hidden mt-3 mx-3 sm:mx-16">
                    <ShopTop />
                </div>
                <div className="hidden md:block">
                    <ShopLeft />
                </div>
                <div className="sm:col-span-3  px-4 mt-5">
                    <ShopRight />
                </div>
            </div>
        </div>
    );
}

export default Shop;
