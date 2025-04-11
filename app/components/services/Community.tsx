import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Community() {
    return (
        <div className='w-full p-5'>
            <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                <p className=" text-[#2A437C]   ">OUR COMMUNITY</p>
            </div>
            <div>
                <h2 className='text-[#001E62] '>Join a <span className='text-[#D13851]'>Growing Community</span> of Business and Logistics Partners </h2>
                <p className='text-[#2A437C]'>Join a dynamic community of businesses and logistics partners.optimizing supply chains and driving growth</p>
                <button className='flex items-center'>
                    Join Us
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}
