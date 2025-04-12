import React from 'react'
import ServiceCards from './ServiceCards'
import { SquareUser } from 'lucide-react'

export default function Service() {
    return (
        <div className='w-full mx-auto mt-10 px-7 '>
            <div className='flex  flex-col gap-7 justify-center items-center'>
                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">Logistic Services</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='text-[#001E62] text-2xl lg:text-3xl mx-auto max-w-[600px] text-center'>Comprehensive <span className='text-[#D13851]'>Logix Services</span>  Tailored to Meet Your Unique <span className='text-[#D13851]'>Needs</span> </p>
                    <p className='text-[#2A437C] text-center mx-auto max-w-[800px]'>Our vision is to be the leading logistics partner, known for excellence in supply chain management, innovation, and customer satisfaction, while exceeding expectations and driving success for our clients globally.</p>
                </div>
            </div>
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
            <ServiceCards Icon={SquareUser} title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />

        </div>
    )
}
