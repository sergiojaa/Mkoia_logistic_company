'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Action() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        setIsReady(true)
    }, [])

    return (
        <div className='w-full mt-10 '>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <p className="text-md uppercase text-[#2A437C] tracking-wider">გალერეა</p>
            </div>

            <div className='lg:flex  justify-between'>
                <h3 className='text-[#001E62] max-w-[550px] font-bold text-3xl'>
                    ჩვენი  <span className='text-[#D13851]'>უძრავი</span> და  <span className='text-[#D13851]'>მოძრავი</span> ქონება
                </h3>
            </div>

            <div className='max-w-[1200px] mt-10 mx-auto'>
                {isReady && (
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
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {[...Array(7)].map((_, i) => (
                            <SwiperSlide key={i}>
                                <Image src='/about/ships.png' alt='ships image' width={400} height={300} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                <div className='flex gap-4 mt-5 justify-end'>
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
    )
}
