import React from 'react'
import Image from 'next/image'
export default function Servicesimage() {
    return (
        <div className='w-full p-5'>
            <div className='relative'>
                <div>
                    <Image className='md:hidden' src='/services/image-mobile.png' alt='logistic image' width={1200} height={100} />
                    <Image className='hidden md:block' src='/services/image-desktop.png' alt='logistic image' width={1200} height={100} />

                </div>
                <div className='absolute text-center text-white top-10 flex flex-col items-center justify-center'>
                    <h2 className='font-bolt text-[40px] '>Logistics Services</h2>
                    <p>Our comprehensive logistics solution is designed to optimize your supply chain and enhance your business operations.</p>
                    <p>CUSTOM SOLUTIONS FOR EVERY NEED</p>
                </div>
            </div>

        </div>
    )
}
