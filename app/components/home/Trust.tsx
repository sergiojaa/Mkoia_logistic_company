'use client'
import React, { useEffect, useRef, useState } from 'react'
import TrustCard from './TrustCard'
import { useTranslate } from '@/app/utils/translate'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
export default function Trust() {
    const t = useTranslate()
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        setIsReady(!isReady)
    }, [])
    return (
        <div className='max-w-[1150px] mt-10  w-full mx-auto'>

            <div className='flex  flex-col gap-5 items-start'>
                <h3 className='text-[#2A437C] lg:px-0 px-7'>{t('user_feedback')}</h3>
                <div className='lg:flex items-center px-7 lg:px-0 gap-52  '>
                    <h1 className='text-[#001E62]  text-2xl font-bold'> <span className='text-[#C8102E]'>{t("trust")}</span> {t('around_region')}</h1>
                    <p className='text-[#2A437C] max-w-[620px] text-lg'>{t('cooperate')}</p>
                </div>
                <div className='max-w-[1200px]  w-full flex flex-col'>
                    <div className="max-w-[1200px] w-full mx-auto">
                        <Swiper
                            spaceBetween={30}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.navigation.init()
                                swiper.navigation.update()
                            }}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <TrustCard
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKh4OCNvS7RJRqYu_nzvgHhGxOo1AZ54dLg&s'
                                    location={t("location")}
                                    description={t('cocacola-feedback')}
                                    companyName={t("coca-cola")}
                                    clientsSince={t("work-from")}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <TrustCard
                                    image='https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/449266907_1971718053245440_2545998577636563752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGlI6rnCmHkdVgbpJjx012jIjoODRxFrjciOg4NHEWuN4whzlsGTOreOqFGczFBAVhpS5tOGuYVm2q4ynDFRomx&_nc_ohc=ux0ns9qZhr4Q7kNvwHA9Dbt&_nc_oc=AdmcpkJ60XS1bwBMXdsgAazJqXsKq6QC2q4IEiFqA-RD0_fIRw8yoLJXG8cDnceH6x4&_nc_zt=23&_nc_ht=scontent.ftbs4-2.fna&_nc_gid=w-IGBOJ-rbEuFBz3b8J4Ww&oh=00_AfHTDKKtuB89XRsEM8N2C4BUwdZAvwuwUAYsD_djfVRE9w&oe=680D9DE1'
                                    location={t("location")}
                                    description={t('rebuild-feedback')}
                                    companyName={t('rebuild')}
                                    clientsSince={t("work-from")}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <TrustCard
                                    image='https://delta.gov.ge/Photos/CCompanies/7.png'
                                    location={t("location")}
                                    description={t('delta-feedback')}
                                    companyName={t('delta')}
                                    clientsSince={t("work-from")}
                                />
                            </SwiperSlide>
                        </Swiper>


                        <div className='flex gap-4 px-7 lg:px-0  justify-end'>
                            <button
                                ref={prevRef}
                                className='bg-[#001E62] cursor-pointer  text-white px-3 py-3 rounded-full hover:bg-[#b82e46] transition'
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                ref={nextRef}
                                className='bg-[#001E62] cursor-pointer text-white px-3 py-3 rounded-full hover:bg-[#b82e46] transition'
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}
