import React from 'react';

function Footer() {
    return (
        <div className="flex justify-center flex-col items-center font-light text-sm  py-5">
            <h3 className="text-gray-700"> Copyright &copy; 2021. All Rights Reserved</h3>
            <p>
                {' '}
                <span className="text-red-600">❤</span> with Nayeem
            </p>
        </div>
    );
}

export default Footer;
