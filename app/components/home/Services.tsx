import React from 'react'
import ServiceCards from './ServiceCards'

export default function Services() {
    return (
        <div className='max-w-[1200px] mt-10 mx-auto '>
            <div className='flex flex-col items-center justify-between'>
                <h3>OUR LOGISTIC SERIVCES</h3>
                <h2 className='text-[#001E62] max-w-[420px] text-center text-[22px]'>Comprehensive <span className='text-[#D13851]'>Logix Services</span>  Tailored to Meet Your Unique <span className='text-[#D13851]'>Needs</span> </h2>
            </div>
            <div className='flex flex-col gap-10 '>
                <ServiceCards icon='/home/custom-icon.png' title='Customs Brokerage' description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
                <ServiceCards icon='/home/custom-icon.png' title='Warehousing & Distribution'
                    description='Secure storage and efficient distribution solutions to keep your inventory flowing smoothly.' />
                <ServiceCards
                    icon='/home/third-icon.png'
                    title='Supply Chain Management'
                    description='Navigating customs with ease, ensuring your goods clear borders swiftly and compliantly.' />
                <ServiceCards icon='/home/fourth-icon.png' title='Cross-Border Solutions'
                    description='Seamless cross-border logistics to connect your business with international markets.' />
                <ServiceCards icon='/home/fifth-icon.png' title='Last-Mile Delivery'
                    description='Reliable last-mile delivery that gets your products to customers’ doorsteps with precision.' />
                <ServiceCards icon='/home/sixth-icon.png' title='Project Cargo Handling'
                    description='Specialized handling for oversized or complex shipments, with tailored logistics solutions.' />

            </div>

        </div>
    )
}
