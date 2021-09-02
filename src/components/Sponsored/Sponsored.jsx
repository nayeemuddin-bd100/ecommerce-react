import React from 'react';
import Logo1 from '../../assets/sponsore-logo/1.png';
import Logo2 from '../../assets/sponsore-logo/2.png';
import Logo3 from '../../assets/sponsore-logo/3.png';
import Logo4 from '../../assets/sponsore-logo/4.png';
import Logo5 from '../../assets/sponsore-logo/5.png';
import Logo6 from '../../assets/sponsore-logo/6.png';

function Sponsored() {
    return (
        <div className="border-b border-gray-200 ">
            <div className=" py-7  gap-4 flex flex-row justify-between mx-4">
                <img className="w-25 h-6 m-6 " src={Logo1} alt="Logo1" />
                <img className="w-25 h-6 m-6 " src={Logo2} alt="Logo2" />
                <img className="w-25 h-6 m-6" src={Logo3} alt="Logo3" />
                <img className="w-25 h-6 m-6 hidden sm:block" src={Logo4} alt="Logo4" />
                <img className="w-25 h-6 m-6 hidden md:block" src={Logo5} alt="Logo5" />
                <img className="w-25 h-6 m-6 hidden lg:block " src={Logo6} alt="Logo6" />
            </div>
        </div>
    );
}

export default Sponsored;
