'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslate } from '@/app/utils/translate'
export default function Banner() {
    const t = useTranslate()

    return (
        <div className='w-full mx-auto'>
            <div className='relative'>
                <div>
                    <Image
                        className="md:hidden rounded-4xl w-full h-[370px] object-cover "
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
                    <h2 className='font-bold text-xl lg:text-3xl  mb-4'> {t('contact-to-mkoia')}</h2>
                    <p className="max-w-xl text-sm md:text-lg mb-6 ">{t('we-are-here')} </p>
                    <div className="flex items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className="text-xs md:text-sm font-medium tracking-wider">{t('local-leaders')}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
