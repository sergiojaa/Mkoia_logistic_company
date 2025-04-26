'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { useTranslate } from '@/app/utils/translate'

export default function MapImage() {
    const t = useTranslate()

    return (
        <div className='relative w-full mx-auto mt-10 rounded-xl overflow-hidden'>

            <div className="absolute inset-0 z-0">
                <Image
                    src='/contact/mapBack.png'
                    alt='image for background'
                    fill
                    className="object-cover"
                />
            </div>

            <div className='relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 p-7 md:p-14'>

                <div className="max-w-[900px] ">
                    <iframe
                        className="w-[350px] px-7 md:w-[500px] h-[350px] rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190417.3572826923!2d44.617697061999415!3d41.77936843825734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473004520e219%3A0x12a16a9ac1bbbcc6!2zTHRkIE1rb2lhIOGDqOGDnuGDoSDhg5Thg5vhg5nhg53hg5jhg5A!5e0!3m2!1ska!2sge!4v1744639175604!5m2!1ska!2sge"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className='flex flex-col mt-10 gap-12'>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className="text-white font-medium">{t("our-address")}</p>
                    </div>

                    <div className='max-w-[350px]'>
                        <p className='text-white text-2xl leading-snug'>
                            {t('address')}
                        </p>
                    </div>

                    <div>
                        <a href="https://www.google.com/maps?ll=41.772773,44.813951&z=10&t=m&hl=ka&gl=GE&mapclient=embed&cid=1342471376840932550" target='_blank'>
                            <button className="flex items-center gap-3 rounded-full bg-white text-white  py-2 px-4 cursor-pointer max-w-max transition hover:scale-105 hover:shadow-lg">
                                <span className='text-[#001E62]'>{t('destination')}</span>
                                <div className="border bg-[#001E62] rounded-full p-1">
                                    <ArrowRight className='text-white' size={16} />
                                </div>
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
