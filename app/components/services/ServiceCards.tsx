'use client'
import React from 'react'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link';
import { useTranslate } from '@/app/utils/translate';
type ServiceCardProps = {
    Icon: LucideIcon;
    title: string;
    description: string;
};
export default function ServiceCards({ Icon, title, description, }: ServiceCardProps) {
    const t = useTranslate()

    return (
        <div className='border border-[#CCD2DF] rounded-3xl flex flex-col gap-5 p-7 max-w-max '>
            <div className='bg-[#F4CFD5] text-[#D13851] max-w-max px-3 py-3'>
                <Icon />

            </div>
            <h3 className='text-[#001E62]'>{title}</h3>
            <p className='max-w-[300px] text-[#556996]'>{description}</p>
            <div className='flex  justify-end'>
                <Link href={'/comtact'}>
                    <button className="flex max-w-max bg-[#001E62] text-white hover:bg-[#556996] transition-0.3s hover:text-white cursor-pointer items-center gap-3 rounded-full border   px-6 py-2 transition-colors ">
                        <span>{t('contact-us')}</span>
                        <div className="border  rounded-full p-1 transition-colors ">
                            <ArrowRight size={16} />
                        </div>
                    </button>
                </Link>

            </div>
        </div>
    )
}
