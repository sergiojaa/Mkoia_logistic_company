import React from 'react'
import Banner from '../components/contact/Banner'
export default function page() {
    return (
        <div className='max-w-[1200px] px-7 mt-7 mx-auto'>
            <div>
                <Banner />
            </div>
            <div>
                <h2>Get In Touch with Mkoia</h2>
                <p>we're here to support your logistixs needs. Reach out to us for inquires, quotes, or assistance</p>
            </div>
            <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                <p className="text-xs md:text-sm font-medium tracking-wider">POWERING BUSINESSES GLOBALLY</p>
            </div>
        </div>
    )
}
