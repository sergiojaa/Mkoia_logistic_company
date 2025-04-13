import { ArrowRight, } from 'lucide-react'
import React from 'react'
import ExperienceCards from './ExperienceCards'

export default function Community() {
    return (
        <div className='w-full  p-7 '>
            <div className='lg:flex-row flex flex-col  gap-5'>
                <div className='flex flex-col mt-8 gap-6'>
                    <div className="flex items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className=" text-[#2A437C]   ">OUR COMMUNITY</p>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h2 className='text-[#001E62] max-w-[700px] text-4xl md:text-5xl font-bold leading-tight'>Join a <span className='text-[#D13851]'>Growing <br /> Community</span> of Business and Logistics Partners </h2>
                        <p className='text-[#2A437C] text-[19px] max-w-[595px]'>Join a dynamic community of businesses and logistics partners.optimizing supply chains and driving growth</p>
                        <button className="flex max-w-max hover:bg-[#001E62] hover:text-white cursor-pointer items-center gap-3 rounded-full border border-[#001E62] text-[#001E62] px-6 py-2 transition-colors hover:border-[#3366CC]">
                            <span>Join Us</span>
                            <div className="border  rounded-full p-1 transition-colors ">
                                <ArrowRight size={16} />
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2   gap-10'>
                        <ExperienceCards year='10' title='Years of Industry Experience' />
                        <ExperienceCards year='20+' title='Employees for Your Success' />
                        <ExperienceCards year='100+' title='Satisfied Clients Worldwide' />
                        <ExperienceCards year='99%' title='On-Time Delivery Rate' />

                    </div>
                </div>
            </div>


        </div>
    )
}
