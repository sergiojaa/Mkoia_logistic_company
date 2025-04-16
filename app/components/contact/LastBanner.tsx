import React from 'react'
import Image from 'next/image'
export default function LastBanner() {
    return (
        <div>

            <Image
                className='md:hidden'
                src='/contact/lastbanner-mobile.png' width={500} height={300} alt=' logistic company contact image' />
            <Image
                className='hidden md:block'
                src='/contact/lastbanner-desktop.png' width={1200} height={300} alt=' logistic company contact image' />

        </div>
    )
}
