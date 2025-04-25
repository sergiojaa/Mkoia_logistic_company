'use client'
import React from 'react'
import ContactCards from './ContactCards'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import ContactInputs from './ContactInputs'
import ContactInfoTexts from './ContactInfoTexts'
import { useTranslate } from '@/app/utils/translate'

export default function ContactInfo() {
    const t = useTranslate()

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center w-full mx-auto lg:items-start  mt-20'>
            <div>
                <ContactInfoTexts />
                <div className="mt-10 flex justify-center md:justify-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <ContactCards Icon={PhoneCall} title={t('phone-number')} description='+995 574 013 708' />
                        <ContactCards Icon={Mail} title={t('email')} description='infoinfo@mkoia.ge' />
                        <ContactCards Icon={MapPin} title={t('our-address')} description={t('our-office')} />
                        <ContactCards Icon={Clock} title={t('working-hours')} description={t('week-days')} />
                    </div>
                </div>


            </div>
            <div className='lg:flex justify-between items-start'>

                <div>
                    <ContactInputs />
                </div>
            </div>



        </div>
    )
}
