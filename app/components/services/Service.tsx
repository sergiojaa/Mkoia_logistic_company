'use client'
import React from 'react'
import ServiceCards from './ServiceCards'
import { SquareUser } from 'lucide-react'
import { useTranslate } from '@/app/utils/translate'

export default function Service() {
    const t = useTranslate()

    return (
        <div className='w-full mx-auto mt-10 px-7 '>
            <div className='flex  flex-col gap-7 justify-center lg:items-start items-center'>
                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">{t('logistics-services')}</p>
                </div>
                <div className='flex flex-col lg:items-start items-center gap-6'>
                    <p className='text-[#001E62] text-xl lg:text-2xl  max-w-[500px] lg:text-start text-center'>{t('comprehensive')} <span className='text-[#D13851]'>{t('logistics-services')}</span>  {t('tailore')} <span className='text-[#D13851]'>{t('unique-needs')}</span> </p>
                    <p className='text-[#2A437C] lg:text-start text-center mx-auto max-w-[800px]'>
                        {t('our-goal')}</p>
                </div>
            </div>
            <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <ServiceCards Icon={SquareUser} title={t('distribution')} description={t('safe-saving')} />
                <ServiceCards Icon={SquareUser} title={t('chain')} description={t('deliver-chain')} />
                <ServiceCards Icon={SquareUser} title={t('deliver')} description={t('last-delivery')} />
            </div>


        </div>
    )
}
