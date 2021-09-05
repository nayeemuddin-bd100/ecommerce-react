import React, { useState } from 'react';

function ShopLeft() {
    const [sorted, setSorted] = useState('default');
    const [category, setCategory] = useState('all');

    return (
        <div className="flex flex-col border-r border-gray-200">
            <div className="flex justify-between mt-4 ">
                <div>Filters:</div>
                <div className="mr-4 hover:text-yellow-500 transition-all">Clean All</div>
            </div>
            <div className="mt-5">
                <div className=" text-gray-700 transition-all">
                    <h2 className="text-black text-lg">Category</h2>
                    <div className="flex justify-between mr-4 border-b border-gray-100 py-2">
                        <button
                            type="button"
                            onClick={() => setCategory('all')}
                            className={`hover:text-yellow-500 transition-all ${
                                category === 'all' ? 'text-yellow-500' : ''
                            }`}
                        >
                            All
                        </button>
                        <h2>2</h2>
                    </div>
                    <div className="flex justify-between mr-4 border-b border-gray-100 py-2">
                        <button
                            type="button"
                            onClick={() => setCategory('electronics')}
                            className={`hover:text-yellow-500 transition-all ${
                                category === 'electronics' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Electronics
                        </button>
                        <h2>2</h2>
                    </div>
                    <div className="flex justify-between mr-4 border-b border-gray-100 py-2">
                        <button
                            type="button"
                            onClick={() => setCategory('jewelary')}
                            className={`hover:text-yellow-500 transition-all ${
                                category === 'jewelary' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Jewelery
                        </button>
                        <h2>2</h2>
                    </div>
                    <div className="flex justify-between mr-4 border-b border-gray-100 py-2">
                        <button
                            type="button"
                            onClick={() => setCategory('menCloathing')}
                            className={`hover:text-yellow-500 transition-all ${
                                category === 'menCloathing' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Men&apos;s Cloathings
                        </button>

                        <h2>2</h2>
                    </div>
                    <div className="flex justify-between mr-4 border-b border-gray-100 py-2">
                        <button
                            type="button"
                            onClick={() => setCategory('womenCloathing')}
                            className={`hover:text-yellow-500 transition-all ${
                                category === 'womenCloathing' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Women&apos;s Cloathings
                        </button>
                        <h2>2</h2>
                    </div>
                </div>

                <div className="mt-5 text-gray-700 transition-all">
                    <h2 className="text-black text-lg">Sort By:</h2>
                    <div className="flex flex-col  items-start">
                        <button
                            type="button"
                            onClick={() => setSorted('default')}
                            className={`hover:text-yellow-500 transition-all my-3 ${
                                sorted === 'default' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Default
                        </button>
                        <button
                            type="button"
                            onClick={() => setSorted('sortByPrice')}
                            className={`hover:text-yellow-500 transition-all my-3 ${
                                sorted === 'sortByPrice' ? 'text-yellow-500' : ''
                            }`}
                        >
                            Sort By Price
                        </button>
                        <button
                            type="button"
                            onClick={() => setSorted('sortByRate')}
                            className={`hover:text-yellow-500 transition-all my-3 ${
                                sorted === 'sortByRate' ? 'text-yellow-500' : ''
                            }`}
                        >
                            {' '}
                            Sort By Rate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopLeft;
