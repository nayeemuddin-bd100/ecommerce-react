import React from 'react';
import WishListItem from '../components/WishListItem/WishListItem';

function WishList() {
    return (
        <div className="py-5 px-3">
            <WishListItem />
            <WishListItem />
            <WishListItem />
        </div>
    );
}

export default WishList;
