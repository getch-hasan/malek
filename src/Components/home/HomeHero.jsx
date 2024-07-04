import React from 'react';
import hero from '../../assets/hero.png'
import { FaBell } from 'react-icons/fa';

const HomeHero = () => {
    return (
        <div>
            <div className='grid grid-cols-2 justify-center  bg-green-50 px-5 items-center'>
                <div className=''>
                    <div className='grid justify-start'>
                        <p className=' border rounded-full flex items-center pe-3   border-red-200 relative '><span className='p-1   bg-green-300 left-0 me-2 rounded-full  '><FaBell ></FaBell></span> startup Business</p>
                    </div>
                    <h1 className='text-5xl my-5 text-start font-bold'>Empowering startups to fuel <br /> their business growth</h1>
                    <p className='text-start'>Eu posuere mi sed purus proin quisque molestie. Ut amet,  at amet,<br /> velit <br />

                        nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                    <div className='grid justify-start'>
                        <button className=' my-10 ml-0 font-semibold rounded-lg bg-orange-600 text-white px-5 py-2'>Get Started now</button>
                    </div>
                </div>
                <div className=''>
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;