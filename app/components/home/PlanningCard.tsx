import React from 'react'
import Image from 'next/image'
interface CardProps {
    number: string,
    title: string,
    description: string,
    image: string
}
export default function PlanningCard({ number, title, description, image }: CardProps) {
    return (
        <div className='relative'>
            <Image src={image} alt={title} width={500} height={100} />
            <h4 className='absolute top-5 left-10 text-[20px]'>{number}</h4>
            <p className='absolute top-15 text-[22px] text-[#001E62] font-bold left-10'>{title}</p>
            <p className='text-[#001E62] absolute top-25 left-10 max-w-[420px] '>{description} </p>
        </div>
    )
}
