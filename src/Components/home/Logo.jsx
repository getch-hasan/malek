import React from 'react';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3png.png'
import logo4 from '../../assets/logo4png.png'
import logo5 from '../../assets/logo5.png'
const Logo = () => {
    return (
        <div className='py-10'>
            <h1 className='font-bold text-center'>We've assisted more than 250 startups in expanding their businesses</h1>
            <div className='grid grid-cols-5 gap-10 py-10 '>
                <div className='px-10'><img src={logo1} alt="" /></div>
                <div className='px-10'><img src={logo2} alt="" /></div>
                <div className='px-10'><img src={logo3} alt="" /></div>
                <div className='px-10'><img src={logo4} alt="" /></div>
                <div className='px-10'><img src={logo5} alt="" /></div>
            </div>
        </div>
    );
};

export default Logo;