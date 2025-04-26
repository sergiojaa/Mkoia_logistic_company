'use client'
import React from 'react'
import Image from 'next/image'
import { CheckCheck, Lightbulb, Users, Leaf } from 'lucide-react';
import { useTranslate } from '@/app/utils/translate';

export default function Whoarewe() {
    const t = useTranslate()
    const values = [
        { icon: <CheckCheck className="text-[#001E62]" size={24} />, label: t('truster') },
        { icon: <Lightbulb className="text-[#001E62]" size={24} />, label: t("innovation") },
        { icon: <Users className="text-[#001E62]" size={24} />, label: t("request") },
        { icon: <Leaf className="text-[#001E62]" size={24} />, label: t("susta") },
    ];
    return (
        <div className='w-full mt-10  py-5'>
            <div className='flex flex-col gap-10 justify-center lg:flex-row lg:justify-between items-center'>
                <div className='flex max-w-[700px] flex-col gap-7'>
                    <div className='flex  items-center'>
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <h3>{t('who_are_we')}</h3>
                    </div>
                    <h2 className='text-[#001E62] text-xl max-w-[520px] lg:text-2xl'>
                        {t('specialize')} <span className='text-[#D13851]'> {t('high-quality')} </span> {t('delivery')}
                    </h2>
                    <p className='text-[#2A437C] max-w-[550px] text-md'>
                        {t('our-team')}
                    </p>
                    <div className='max-w-[490px] border-b-4 border-b-[#D13851] rounded-xl p-5 bg-[#EEF4FF]'>
                        <h2 className='text-[#001E62] '>
                            {t('our-work')}
                        </h2>
                    </div>
                </div>
                <div className="w-full max-w-[400px]">
                    <Image
                        src="https://i0.wp.com/www.buildingcode.co.ke/wp-content/uploads/2020/11/Building-Supplies.png?fit=740%2C485&ssl=1"
                        alt="logistic containers"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="bottom-5 mx-auto left-5 bg-white rounded-xl shadow-md p-6 w-[70%] max-w-xs space-y-4">
                        {values.map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-3 text-[#001E62]  text-lg">
                                {icon}
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
