import React from 'react'
import Image from 'next/image'
export default function Banner() {
    return (
        <div className='w-full mx-auto'>
            <div>
                <Image src='/contact/banner-desktop.png' alt='contact image about logistic' width={1200} height={300} />
            </div>
        </div>
    )
}
