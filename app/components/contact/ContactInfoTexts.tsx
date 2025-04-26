'use client'
import { useTranslate } from '@/app/utils/translate'
import React from 'react'

export default function ContactInfoTexts() {
    const t = useTranslate()

    return (
        <div>
            <div className='flex flex-col gap-9'>
                <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C]">{t('contact-info')}</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[#001E62]  text-3xl   max-w-[545px] leading-tight'>{t('Contact-us-and')} <span className='text-[#D13851]'> {t('your-business')}</span> </h2>
                    {/* <p className='text-[#2A437C] text-[19px] max-w-[595px]'>მზად ხართ აიყვანოთ თქვენი ლოჯისტიკა შემდეგ დონეზე? დაგვიკავშირდით დღეს იმის გასარკვევად, თუ როგორ შეუძლია ჩვენი მორგებული გადაწყვეტილებები და ინდუსტრიის გამოცდილება გარდაქმნას თქვენი მიწოდების ჯაჭვი.</p> */}
                </div>
            </div>
        </div>
    )
}
