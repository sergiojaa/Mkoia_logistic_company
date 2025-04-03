import React from 'react'
import Card from './Card'

export default function Transit() {
    return (
        <div className='max-w-[1200px] p-10 mx-auto '>
            <div className='flex flex-col items-center'>
                <h4 className='text-[#2A437C] text-[14px]'>OUR FREIGHT SOLUTION</h4>
                <h2 className='text-[#001E62] text-[22px] max-w-[430px]  text-center'> <span className='text-[#D13851]'>Expertly Managing </span> Every Step From Transit to Warehousing</h2>
            </div>
            <div className=" flex flex-col lg:flex-row gap-10  ">
                <div className='md:flex-row flex flex-col  items-center justify-center gap-10'>
                    <Card
                        src={'/airplane.png'}
                        button="Air Freight"
                        text="Fast, reliable shipping for high-priority items across the globe."
                    />
                    <Card
                        src={'/airplane.png'}
                        button="Sea Freight"
                        text="Economical and environmentally friendly, ideal for large volumes and long distances."
                    />
                </div>
                <div className='md:flex-row flex flex-col  items-center justify-center gap-10'>
                    <Card
                        src={'/airplane.png'}
                        button="Rail Freight"
                        text="Cost-effective solutions for bulk goods, with extensive point-to-point coverage."
                    />
                    <Card
                        src={'/airplane.png'}
                        button="Road Freight"
                        text="Efficient transportation for regional shipments with flexible schedules."
                    />
                </div>

            </div>


        </div>
    )
}
