import React from 'react'
import Banner from '../components/contact/Banner'
import ContactInfo from '../components/contact/ContactInfo'
export default function page() {
    return (
        <div className='max-w-[1200px] px-7 mt-7 mx-auto'>
            <div>
                <Banner />
                <ContactInfo />
            </div>

        </div>
    )
}
