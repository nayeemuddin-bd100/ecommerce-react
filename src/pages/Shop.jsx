import React from 'react';
import ShopLeft from '../components/ShopComponents/ShopLeft';
import ShopRight from '../components/ShopComponents/ShopRight';

function Shop() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 mx-4 font-osygen">
                <div className="hidden sm:block">
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
