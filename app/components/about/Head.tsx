import React from 'react'
import Image from 'next/image'
export default function Head() {
    return (
        <div className='w-full'>
            <div>
                <Image src='/about/head-mobile.png' width={380} height={200} alt='image' />
            </div>
        </div>
    )
}
