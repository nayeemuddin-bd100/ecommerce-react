import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ShopRight() {
    return (
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ShopRight;
