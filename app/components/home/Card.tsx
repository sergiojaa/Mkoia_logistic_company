import React from 'react'
import Image from 'next/image'
interface CardProps {
    button: string
    src: string,
    text: string
}
export default function Card({ src, text, button }: CardProps) {

    return (
        <div className='flex flex-col    items-center'>
            <div className='relative  max-w-[700px] '>
                <Image
                    src={src}
                    alt='shipping image'
                    width={300}
                    height={100}
                    className='object-cover'
                />

                <button className='absolute top-13 left-10 text-white text-[18px] px-4 py-2 rounded-full bg-white/30'>{button}</button>
                <p className='absolute top-30 left-5 text-white max-w-[280px] text-[20px] p-5'>{text}</p>
            </div>
        </div>
    )
}

