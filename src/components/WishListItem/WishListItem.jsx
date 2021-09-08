import DemoProduct from '../../assets/img/demo-product.jpg';

function wishListItem() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 justify-center items-center my-3">
            <div className="grid grid-cols-1 justify-center lg:grid-cols-4 lg:justify-start items-center">
                {' '}
                <img
                    className="w-full h-52  object-scale-down lg:h-10 "
                    src={DemoProduct}
                    alt="demo product"
                />
                <h2 className="-mt-5 lg:-mt-0 text-center lg:text-left lg:col-span-3 text-gray-600 text-lg">
                    Microsoft – Refurbish Xbox One S 500GB
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between  items-center text-yellow-500 text-sm font-light">
                <h2 className="text-xl lg:text-base font-medium">$329.32</h2>
                <p className="text-gray-600 text-xs font-medium ">In Stock</p>
                <button
                    className="mt-4 lg:mt-0 border border-yellow-500 px-4 py-1 hover:bg-yellow-500 hover:text-white transition-all"
                    type="button"
                >
                    {' '}
                    Add To Cart
                </button>
                <button
                    className="lg:mr-10 text-xs my-4 lg:my-0 text-gray-600 hover:text-yellow-500 transition-all"
                    type="button"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default wishListItem;
