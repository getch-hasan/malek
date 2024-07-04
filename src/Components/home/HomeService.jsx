import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdMovieCreation } from 'react-icons/md';

const HomeService = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='flex justify-center items-center border rounded-xl bg-green-100 p-4'>
                <div className='p-4 m-4 border-r-2 border-red-200 '><IoSettingsOutline className='h-10 w-10' /></div>
                <div>
                    <h1 className='font-bold text-2xl mb-3 '>Immediate Deployment</h1>
                    <p>Et vero eos et accusamus et iusto odio dignissimos</p>
                </div>
            </div>
            <div className='flex justify-center items-center border rounded-xl bg-green-100 p-4'>
                <div className='p-4 m-4 border-r-2 border-red-200 '><MdMovieCreation className='h-10 w-10' /></div>
                <div>
                    <h1 className='font-bold text-2xl mb-3 '>DOS Protection</h1>
                    <p>But I need to clarify how this erroneous concept is</p>
                </div>
            </div>
            <div className='flex justify-center items-center border rounded-xl bg-green-100 p-4'>
                <div className='p-4 m-4 border-r-2 border-red-200 '><FaHeadphones className='h-10 w-10' /></div>
                <div>
                    <h1 className='font-bold text-2xl mb-3 '>Premium Support</h1>
                    <p>we disapprove of those who uphold righteous indignation.</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default HomeService;