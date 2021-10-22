/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function ShopTop() {
    return (
        <div className="flex gap-1 justify-between ">
            <div className="text-sm sm:text-base">
                <div className="font-semibold text-gray-900">
                    <label htmlFor="category">Category :</label>
                </div>
                <div className="border p-2 rounded mt-2 text-gray-600">
                    <select id="country" name="country">
                        <option value="all"> All - (2)</option>
                        <option value="electronics">Electronics - (2)</option>
                        <option value="jewelery" selected>
                            Jewelery - (2)
                        </option>
                        <option value="mensclothing">Men&apos;s Cloathings - (2)</option>
                        <option value="womensclothing">Women&apos;s Cloathings - (2)</option>
                    </select>
                </div>
            </div>
            <div className="text-sm sm:text-base">
                <div className="font-semibold text-gray-900">
                    <label htmlFor="category">Sort By :</label>
                </div>
                <div className="border p-2 rounded mt-2 text-gray-600">
                    <select id="country" name="country">
                        <option value="default"> Default</option>
                        <option value="sortbyprice">Sort By Price</option>
                        <option value="sortbyrate">Sort By Rate</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ShopTop;
