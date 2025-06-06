"use client"
import { useTranslate } from "@/app/utils/translate"
import Image from "next/image"

export default function Head() {
    const t = useTranslate()

    return (
        <div className="w-full mx-auto ">
            <div className="relative">
                <div className="block md:hidden w-full">
                    <Image
                        src="/about/head-mobile.png"
                        width={1200}
                        height={370}
                        alt="Logix mobile header"
                        className="md:hidden rounded-4xl w-full h-[370px] object-cover "
                    />
                </div>

                <div className="hidden md:block w-full">
                    <Image
                        src="/about/head-desktop.png"
                        width={1200}
                        height={400}
                        alt="Logix desktop header"
                        className="w-full"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-10 lg:px-16 text-white">
                    <div className="max-w-3xl lg:mx-auto lg:text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('about_mkoia')}</h1>
                        <div className="w-12 h-1 bg-white mb-6 lg:mx-auto"></div>
                        <p className="text-sm md:text-base lg:text-lg mb-8 max-w-2xl lg:mx-auto">
                            {t('offer')}
                        </p>
                        <div className="flex items-center lg:justify-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <p className="text-xs md:text-sm uppercase tracking-wider">{t('team')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
