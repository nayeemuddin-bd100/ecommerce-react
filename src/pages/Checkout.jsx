/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Checkout() {
    return (
        <div className="grid grid-cols-1 py-5 mx-3 sm:mx-8">
            <form className="">
                <div className="flex flex-row w-full gap-4 sm:gap-8">
                    <div className="w-full">
                        <label htmlFor="firstName" className="text-gray-600">
                            {' '}
                            First Name*
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className="text-gray-600">
                            {' '}
                            Last Name*
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                        />
                    </div>
                </div>

                {/* country */}
                <div className="w-full mt-3">
                    <label htmlFor="country" className="text-gray-600">
                        {' '}
                        Country*
                    </label>
                    <br />
                    <input
                        type="text"
                        required
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                    />
                </div>

                {/* Street Address */}
                <div className="w-full mt-3">
                    <label htmlFor="country" className="text-gray-600">
                        {' '}
                        Street Address*
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="House number and Street name"
                        required
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                    />
                    <input
                        type="text"
                        placeholder="Apartments , suit, unit etc(optional)"
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-sm px-4"
                    />
                </div>

                {/* Town and zipcode */}
                <div className="flex flex-row w-full gap-4 sm:gap-8 mt-3">
                    <div className="w-full">
                        <label htmlFor="town" className="text-gray-600">
                            {' '}
                            Town / City*
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="postCode" className="text-gray-600">
                            {' '}
                            PostCode / Zip*
                        </label>
                        <br />
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="w-full mt-3">
                    <label htmlFor="phone" className="text-gray-600">
                        {' '}
                        Phone*
                    </label>
                    <br />
                    <input
                        type="number"
                        required
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                    />
                </div>

                {/* Email Address */}
                <div className="w-full mt-3">
                    <label htmlFor="email" className="text-gray-600">
                        {' '}
                        Email Address*
                    </label>
                    <br />
                    <input
                        type="email"
                        required
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                    />
                </div>

                {/* Order Notes */}
                <div className="w-full mt-3">
                    <label htmlFor="orderNotes" className="text-gray-600">
                        {' '}
                        Order Notes(optional)
                    </label>
                    <br />
                    <textarea
                        type="text"
                        placeholder="Notes about your order , e.g: special notes for delivery"
                        className="bg-gray-50 border border-gray-300 w-full py-1 mt-2 rounded-sm focus:ring focus:ring-blue-300 focus:outline-none text-gray-500 text-lg px-4"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className=" px-10 py-2 border border-yellow-500 rounded-lg text-yellow-500 text-lg hover:text-white hover:bg-yellow-500 transform duration-500 ease-in-out mt-3 "
                    >
                        {' '}
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;
