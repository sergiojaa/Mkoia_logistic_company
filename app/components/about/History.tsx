import React from 'react'
import Image from 'next/image'
export default function History() {
    return (
        <div>
            <div>
                <Image
                    className='hidden md:block'
                    src='/about/History-desktop.png' width={1200} height={200} alt='image' />
                <Image
                    className='md:hidden'
                    src='/about/History-mobile.png' width={1200} height={200} alt='image' />

            </div>
        </div>
    )
}
