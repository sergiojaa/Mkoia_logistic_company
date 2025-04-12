import React from 'react'

export default function Service() {
    return (
        <div className='w-full mx-auto px-7 '>
            <div className='flex  flex-col gap-2 justify-center items-center'>
                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">Logistic Services</p>
                </div>
                <div>
                    <p className='text-[#001E62] text-2xl lg:text-3xl max-w-[600px] text-center'>Comprehensive <span className='text-[#D13851]'>Logix Services</span>  Tailored to Meet Your Unique <span className='text-[#D13851]'>Needs</span> </p>
                </div>
            </div>

        </div>
    )
}
