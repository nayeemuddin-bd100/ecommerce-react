import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';

function Cart() {
    return (
        <>
            {/* Cart Header */}
            <div className="hidden lg:grid grid-cols-2 mt-4 text-gray-400">
                <div className="ml-10">Products</div>
                <div className="grid grid-cols-4">
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2 className="justify-self-center">Total</h2>
                </div>
            </div>

            {/* Cart Items */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

            {/* Cart Total */}
            <div className="border-dashed border border-gray-400 mx-2 sm:mx-16 px-8 sm:px-16 py-5 bg-gray-100 text-gray-700">
                <h2 className="border-b border-gray-400 pb-3 text-lg font-osygen ">Cart Total</h2>
                <div className="mt-4 text-black flex flex-row justify-between">
                    <h2>Subtotal : </h2>
                    <h2>$8,939.72</h2>
                </div>
                <div className="mt-4 text-black flex flex-row justify-between">
                    <h2>Shipping:</h2>
                    <div>
                        {' '}
                        <select
                            name="shippig"
                            id="shipping"
                            className="px-3 py-1 rounded-sm text-gray-700 bg-gray-50 border border-gray-300"
                        >
                            <option value="select"> Please Select</option>
                            <option value="free-shipping">Free Shipping - $0</option>
                            <option value="standard"> Standard - $10</option>
                            <option value="express"> Express - $20</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 flex flex-row justify-between text-yellow-500">
                    <h2>Total</h2>
                    <h2>$323.32</h2>
                </div>
                <div className="mt-3 text-center">
                    <Link
                        to="/checkout"
                        type="button"
                        className="border border-yellow-500 text-yellow-500 px-7 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transform duration-700 ease-in-out"
                    >
                        {' '}
                        Proceed Checkout
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Cart;
