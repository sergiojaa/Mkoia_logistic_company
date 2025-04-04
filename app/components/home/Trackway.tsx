import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
export default function Trackway() {
    return (
        <div>
            <div className='relative '>
                <Image
                    className='h-[550px]'
                    src={'/trackway.png'} width={1440} height={100} alt='track way' />
                <h2 className='absolute max-w-[700px] left-20 text-white font-bold text-[35px] top-20'>We're revolutionizing logistics to meet a growing market</h2>
                <h2 className='absolute max-w-[700px] bottom-30 left-20 text-[#EEEEEE] text-[18px]'>Transforming logistics with innovative solutions, by using advanced technologies and data-driven strategies to improve efficiency, reduce costs, and meet the growing demands of the market.</h2>
                <button className='flex border px-4 py-2 cursor-pointer border-white text-white absolute rounded-full right-20 bottom-30'>Learn more
                    <ArrowRight />

                </button>
            </div>
            <div className='relative'>
                <Image className=' h-[550px]' src={'/content.png'} width={1440} height={100} alt='content image' />
                <h4 className='absolute top-10 text-white left-20'>WORK PROCESS</h4>
                <h3 className='absolute top-20 text-[20px] font-bold text-white left-20'>How We Work</h3>
                <p>Our process is simple yet effective. From the initial consultation to understand your logistics needs, to careful planning and execution, we ensure every detail is handled with precision.</p>
            </div>

        </div>
    )
}
