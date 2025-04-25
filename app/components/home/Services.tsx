'use client'
import React from 'react'
import ServiceCards from './ServiceCards'
import { useTranslate } from '@/app/utils/translate'

export default function Services() {
    const t = useTranslate()

    return (
        <div className='max-w-[1200px] mt-10 px-7 mx-auto '>
            <div className='flex gap-3 flex-col items-center  md:items-start justify-between'>
                <h1 className="text-3xl text-[#001E62] font-bold mb-4">
                    <span>{t("our")} </span>
                    <span className="text-[#D13851]">{t('logistic_service')}</span>

                </h1>
            </div>


            <div className='flex flex-col gap-8 '>
                <ServiceCards icon='/home/custom-icon.png' title={t('distribution')}
                    description={t('safe-save')} />
                <ServiceCards
                    icon='/home/third-icon.png'
                    title={t('chain')}
                    description={t('process')} />
                <ServiceCards icon='/home/fifth-icon.png' title={t('bring')}
                    description={t('trust-delivery')} />
                <ServiceCards icon='/home/sixth-icon.png' title={t('cargo')}
                    description={t('big-delivery')} />

            </div>

        </div>
    )
}
