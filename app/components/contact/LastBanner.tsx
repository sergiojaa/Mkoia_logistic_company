'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslate } from '@/app/utils/translate'
import Link from 'next/link'
export default function LastBanner() {
    const t = useTranslate()

    return (
        <div className='w-full lg:px-7 mt-25'>
            <div className="relative">
                <Image
                    className="md:hidden  w-full h-[370px] rounded-3xl object-cover "
                    src='/contact/lastbanner-mobile.png' width={500} height={300} alt=' logistic company contact image' />
                <Image
                    className='hidden rounded-4xl md:block'
                    src='/contact/lastbanner-desktop.png' width={1200} height={300} alt=' logistic company contact image' />
                <div className="absolute lg:left-20  inset-0 text-white flex flex-col items-center md:items-start justify-center gap-4 px-4  md:px-10 text-center md:text-left">
                    <h2 className="font-bold  text-xl  max-w-[650px] lg:text-xl   mb-4">{t('contact-banner')}</h2>
                    <div >
                        <Link href={'/contact'}>
                            <button className="flex max-w-max bg-white text-[#001E62]   cursor-pointer  gap-3 rounded-full    px-6 py-2 transition-colors ">
                                <span className=''>{t('contact-us')}</span>
                                <div className="border bg-[#001E62] text-white  rounded-full p-1  ">
                                    <ArrowRight size={16} />
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    )
}
