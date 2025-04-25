'use client'
import { useTranslate } from "@/app/utils/translate"
import Image from "next/image"

export default function Servicesimage() {
    const t = useTranslate()

    return (
        <div className="w-full p-7">
            <div className="relative">
                <div>
                    <Image
                        className="md:hidden rounded-4xl w-full h-[370px] object-cover "
                        src="/services/image-mobile.png"
                        alt="logistic image"
                        width={1200}
                        height={370}
                    />
                    <Image
                        className="hidden md:block w-full object-cover "
                        src="/services/image-desktop.png"
                        alt="logistic image"
                        width={1200}
                        height={500}
                    />
                </div>
                <div className="absolute inset-0 text-center text-white flex flex-col items-center justify-center px-4">
                    <h2 className="font-bold text-2xl lg:text-3xl   mb-4">{t("services")}</h2>
                    <p className="max-w-2xl text-sm md:text-lg mb-6">
                        ჩვენი ყოვლისმომცველი ლოჯისტიკური გადაწყვეტილება შექმნილია თქვენი პროექტები ოპტიმიზაციისა და თქვენი მიზნების გასაუმჯობესებლად.
                    </p>
                    <div className="flex items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className="text-xs md:text-sm font-medium tracking-wider">მორგებული გადაწყვეტილებები ყველა საჭიროებისთვის</p>
                    </div>
                </div>
            </div>
        </div>
    )
}