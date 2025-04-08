import React from 'react'

export default function Action() {
    return (
        <div className='w-full p-5'>
            <div className="flex items-center ">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <p className="text-md uppercase text-[#2A437C] tracking-wider">Gallery</p>
            </div>
            <div className='lg:flex justify-between'>
                <h3 className='text-[#001E62] max-w-[350px] font-bold text-4xl'>Fleet in <span className='text-[#D13851]'>Action:</span>   Our  <span className='text-[#D13851]'>Freight</span>  Journey</h3>
                <p className='text-[#556996] text-lg max-w-[550px]'>Taking you through the journey of our fleet, where every step is carefully managed for precision, speed, and reliability, ensuring timely deliveries and seamless logistics from start to finish.</p>
            </div>
        </div>
    )
}
