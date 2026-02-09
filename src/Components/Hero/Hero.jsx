import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-10 justify-around w-11/12 mx-auto mt-10'>
            <div className='border p-30 text-center rounded-2xl bg-gradient-to-br from-[#632EE3] to-[#9F62F2] lg:w-4/12'>
                <h1 className='text-2xl font-bold'>In-progress</h1>
                <p className='text-5xl'>0</p>
            </div>
            <div className='border p-30 text-center rounded-2xl bg-gradient-to-r from-[#54CF68] to-[#00827A] lg:w-4/12'>
                <h1 className='text-2xl font-bold'>Resolved</h1>
                <p className='text-5xl'>0</p>
            </div>
            
        </div>
    );
};

export default Hero;