import React from 'react'
import Image from 'next/image'
import ProcessCard from './ProcessCard'
export default function Process() {
    return (
        <div className='w-full mt-10  mx-auto px-7'>
            <div className='flex lg:items-start  flex-col gap-7 justify-center items-center'>
                <div className="flex   items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">Work Process</p>
                </div>
                <div >
                    <h2 className='text-[#001E62] text-2xl lg:text-3xl mx-auto max-w-[500px] text-center'>Our <span className='text-[#D13851]'>Best Process </span> for Excellence</h2>

                </div>
                <div>
                    <p className='text-[#556996] max-w-[500px]'>Our process is simple yet effective. Every project is different, but we’ve seen thousands of them since we first launched. Our experience is your asset.</p>

                </div>
                <div className='lg:flex-row flex flex-col items-center  justify-center gap-16 lg:items-start'>
                    <div>
                        <Image className='lg:hidden' src='/services/process-desktop.png' alt='logistic process' width={350} height={100} />
                        <Image className='hidden lg:mt-24 lg:block' src='/services/process-desktop.png' alt='logistic process' width={608} height={100} />

                    </div>
                    <div className='grid grid-cols-1  md:mt-0 md:grid-cols-2 lg:grid-cols-1 gap-12'>

                        <ProcessCard plan='01' title='In-Depth Consultation' description='Carefully assessing your logistics needs to ensure tailored and effective solutions.' />
                        <ProcessCard plan='02' title='Strategic Planning' description='Designing a best plan to ensure efficient and optimal delivery of your goods.' />
                        <ProcessCard plan='03' title='Efficient Execution   ' description='Carefully coordinating every detail of the shipment process to ensure smooth and timely execution.' />
                        <ProcessCard plan='04' title='On-Time Delivery' description='Gaining a deep understanding of your logistics needs to offer the best possible solutions.' />

                    </div>
                </div>

            </div>

        </div >
    )
}
