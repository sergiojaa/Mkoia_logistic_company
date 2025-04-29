'use client'
import { useTranslate } from '@/app/utils/translate'
import React, { useState } from 'react'



export default function Exclusiveoffers() {
    const t = useTranslate()
    const consultation = [
        { offer: t('offer-1') },
        { offer: t('offer-2') },
        { offer: t('offer-3') },
        { offer: t('offer-4') },
        { offer: t('offer-5') },
        { offer: t('offer-6') },
        { offer: t('offer-7') },
        { offer: t('offer-8') },
        { offer: t('offer-9') }
    ]
    const [offers] = useState(consultation)

    return (
        <section className="w-full py-12 bg-slate-50">
            <div className="max-w-[1200px] px-7 mx-auto">
                <div className="flex flex-col items-center lg:items-start lg:text-start text-center mb-10">
                    {/* <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">შეზღუდული დროით</div> */}
                    <h2 className="font-bold tracking-tight text-xl lg:text-3xl text-[#2A437C]">
                        <span className="text-[#C8102E]">{t('exclusive')} </span>{t('offers')}
                    </h2>
                    <p className="max-w-[700px] text-[#2A437C] md:text-xl mt-4">
                        {t('mkoia-offer')}
                    </p>
                </div>

                <h3 className="text-xl text-[#2A437C] font-semibold mb-6 lg:text-start text-center">{t('client-offer')}</h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-[#2A437C]">{t('offer')}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-[#2A437C] space-y-4 text-center ">
                    <h4 className="text-lg font-medium">
                        {t('mkoia-desc')}
                    </h4>
                    <p className="font-medium">
                        {t('success')}
                    </p>
                    <p className="text-[#2A437C]">
                        {t('respect')}

                    </p>
                </div>
            </div>
        </section>
    )
}
