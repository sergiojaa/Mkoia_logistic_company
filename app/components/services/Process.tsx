'use client'
import React from 'react'
import Image from 'next/image'
import ProcessCard from './ProcessCard'
import { useTranslate } from '@/app/utils/translate'
export default function Process() {
    const t = useTranslate()

    return (
        <div className='w-full mt-10  mx-auto px-7'>
            <div className='flex lg:items-start  flex-col gap-7 justify-center items-center'>
                <div className="flex   items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-xl lg:text-2xl  ">{t('work-process')}</p>
                </div>
                {/* <div >
                    <h2 className='text-[#001E62] text-2xl lg:text-3xl mx-auto max-w-[500px] '>ჩვენი <span className='text-[#D13851]'>საუკეთესო პროცესი </span> სრულყოფილებისთვის</h2>

                </div> */}
                <div>
                    <p className='text-[#556996] lg:text-xl max-w-[500px]'>{t("our-work-easy")}</p>

                </div>
                <div className='lg:flex-row flex flex-col items-center  justify-center gap-16 lg:items-start'>
                    <div>
                        <Image className='lg:hidden ' src='/services/process-desktop.png' alt='logistic process' width={350} height={100} />
                        <Image className='hidden lg:mt-24 lg:block' src='/services/process-desktop.png' alt='logistic process' width={608} height={100} />

                    </div>
                    <div className='grid grid-cols-1  md:mt-0 md:grid-cols-2 lg:grid-cols-1 gap-12'>

                        <ProcessCard plan='01' title={t('consultation')} description={t('logistic-need')} />
                        <ProcessCard plan='02' title={t('strategic')} description={t('effective')} />
                        <ProcessCard plan='03' title={t('effect')} description={t('detail')} />
                        <ProcessCard plan='04' title={t('deliver')} description={t('your-logistic')} />

                    </div>
                </div>

            </div>

        </div >
    )
}
