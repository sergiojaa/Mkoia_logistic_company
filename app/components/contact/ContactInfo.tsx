import React from 'react'
import ContactCards from './ContactCards'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import ContactInputs from './ContactInputs'
import ContactInfoTexts from './ContactInfoTexts'

export default function ContactInfo() {
    return (
        <div className='flex flex-col items-center justify-center w-full mx-auto lg:items-start  mt-20'>
            <div>
                <ContactInfoTexts />

            </div>
            <div className='lg:flex justify-between '>
                <div className='flex mt-10 items-center lg:items-start lg:justify-start justify-center flex-col gap-7'>
                    <div className='md:flex-row flex flex-col gap-7 justify-between   max-w-[500px]'>
                        <ContactCards Icon={PhoneCall} title='ტელეფონი' description='+995 574 013 708' />
                        <ContactCards Icon={Mail} title='მეილი' description='infoinfo@mkoia.ge' />
                    </div>

                    <ContactCards Icon={MapPin} title='მისამართი' description='თბილისი, გურამ ქუთათელაძის 2 ა' />
                    <ContactCards Icon={Clock} title='სამუშაო საათები' description='ორშაბათი – პარასკევი, 9:30  – 5:00 ' />
                </div>
                <div>
                    <ContactInputs />
                </div>
            </div>



        </div>
    )
}
