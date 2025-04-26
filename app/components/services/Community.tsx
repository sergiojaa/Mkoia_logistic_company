'use client'
import { ArrowRight, } from 'lucide-react'
import React from 'react'
import ExperienceCards from './ExperienceCards'
import { useTranslate } from '@/app/utils/translate'
import Link from 'next/link'
export default function Community() {
    const t = useTranslate()

    return (
        <div className='w-full  p-7 '>
            <div className='lg:flex-row flex flex-col  gap-5'>
                <div className='flex flex-col mt-8 gap-6'>
                    <div className="flex items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className=" text-[#2A437C]   ">{t('our-community')}</p>
                    </div>
                    <div className='flex flex-col gap-15'>
                        <h2 className='text-[#001E62] max-w-[700px] text-4xl md:text-4xl font-bold leading-tight'>{t('join')} <span className='text-[#D13851]'>{t('grow')} <br /> {t('business')}</span> {t('logistic-partners')}</h2>
                        {/* <p className='text-[#2A437C] text-[19px] max-w-[595px]'>შეუერთდით ბიზნესისა და ლოჯისტიკური პარტნიორების დინამიურ საზოგადოებას.მომარაგების ჯაჭვების ოპტიმიზაცია და ზრდის სტიმულირება </p> */}
                        <Link href={'/contact'}>
                            <button className="flex max-w-max hover:bg-[#001E62] hover:text-white cursor-pointer items-center gap-3 rounded-full border border-[#001E62] text-[#001E62] px-6 py-2 transition-colors hover:border-[#3366CC]">
                                <span>{t('join-us')}</span>
                                <div className="border  rounded-full p-1 transition-colors ">
                                    <ArrowRight size={16} />
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2   gap-10'>
                        <ExperienceCards year='3' title={t('experience')} />
                        <ExperienceCards year='10+' title={t('employee')} />
                        <ExperienceCards year='500+' title={t('client')} />
                        <ExperienceCards year='90%' title={t('delivery-rate')} />

                    </div>
                </div>
            </div>


        </div>
    )
}
