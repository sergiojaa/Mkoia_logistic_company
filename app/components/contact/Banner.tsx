import React from 'react'
import Image from 'next/image'
export default function Banner() {
    return (
        <div className='w-full mx-auto'>
            <div className='relative'>
                <div>
                    <Image
                        className="md:hidden w-full h-[370px] object-cover brightness-[0.7]"
                        src="/contact/banner-mobile.png"
                        alt="contact image about logistic"
                        width={1200}
                        height={370}
                    />
                    <Image
                        className="hidden md:block w-full object-cover "
                        src='/contact/banner-desktop.png' alt='contact image about logistic' width={1200} height={500} />
                </div>
                <div className="absolute inset-0 text-center text-white flex flex-col items-center justify-center px-4">
                    <h2 className='font-bold text-3xl lg:text-4xl  mb-4'>Get In Touch with Mkoia</h2>
                    <p className="max-w-xl text-sm md:text-lg mb-6 ">we're here to support your logistixs needs. Reach out to us for inquires, quotes, or assistance</p>
                    <div className="flex items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className="text-xs md:text-sm font-medium tracking-wider">POWERING BUSINESSES GLOBALLY</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
