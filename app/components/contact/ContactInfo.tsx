import React from 'react'
import ContactCards from './ContactCards'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import ContactInputs from './ContactInputs'
import ContactInfoTexts from './ContactInfoTexts'

export default function ContactInfo() {

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center w-full mx-auto lg:items-start  mt-20'>
            <div>
                <ContactInfoTexts />
                <div className="mt-10 flex justify-center md:justify-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <ContactCards Icon={PhoneCall} title='ტელეფონი' description='+995 574 013 708' />
                        <ContactCards Icon={Mail} title='ელ-ფოსტა' description='infoinfo@mkoia.ge' />
                        <ContactCards Icon={MapPin} title='მისამართი' description='თბილისი, გურამ ქუთათელაძის 2 ა' />
                        <ContactCards Icon={Clock} title='სამუშაო საათები' description='ორშ – პარ, 09:30 – 17:00 ' />
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
