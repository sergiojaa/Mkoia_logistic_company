import React from 'react'

export default function MapImage() {
    return (
        <div>
            <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                <p className=" text-[#2A437C]">FIND US</p>
            </div>
            <div>
                <p>Conveniently Located for Easy Access to All Major Logistics Routes</p>

            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#001E62] mt-5 cursor-pointer py-2 rounded-full text-white w-[400px]'>Contact Us</button>

            </div>
        </div>
    )
}
