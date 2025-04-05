import React from 'react'
import Image from 'next/image'
interface ServiceCard {
    icon: string,
    title: string,
    description: string
}
export default function ServiceCards({ icon, title, description }: ServiceCard) {
    return (
        <div className='mx-5' >
            <div className='border  border-[#CCD2DF]  rounded-xl px-10 py-5 lg:flex-row    max-w-[1200px] mx-auto flex flex-col gap-6'>
                <div className='flex items-start'>
                    <Image className='object-cover' src={icon} alt=' icon' width={48} height={48} />
                </div>
                <div className='flex lg:flex-row w-[950px] justify-between   flex-col gap-6'>
                    <h3 className='text-[#001E62] text-[28px] '>{title}</h3>
                    <p className='text-[#556996] max-w-[500px] text-[16px]'>{description}</p>

                </div>

            </div>

        </div>
    )
}
