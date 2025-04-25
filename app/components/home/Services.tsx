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
                <ServiceCards icon='/home/custom-icon.png' title='საწყობი & დისტრიბუცია'
                    description='გთავაზობთ უსაფრთხო შენახვას და ეფექტურ განაწილებას, რათა ინვენტარი შეუფერხებლად გადაადგილდეს.' />
                <ServiceCards
                    icon='/home/third-icon.png'
                    title='მიწოდების ჯაჭვის ელემენტი'
                    description='საბაჟო პროცესების ეფექტურად მართვა, რათა თქვენი ტვირთი სწრაფად და კანონიერად გადმოსცდეს საზღვრებს' />
                <ServiceCards icon='/home/fifth-icon.png' title='ზუსტ წერტილამდე მოტანა'
                    description='სანდო ზუსტ წერტილამდე მოტანა, რაც თქვენ გიხსნით კიდევ სხვა პასუხისმგებლობებს' />
                <ServiceCards icon='/home/sixth-icon.png' title='ტვირთის მართვა'
                    description='სპეციალიზებული დამუშავება დიდი და რთული გადაზიდვებისთვის, მორგებული გადაწყვეტილებებით.' />

            </div>

        </div>
    )
}
