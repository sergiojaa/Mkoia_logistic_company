import React from 'react'
import Image from 'next/image'
export default function Cargo() {
    return (
        <div>
            <div>
                <Image src='/about/cargo.mobile.png' alt='logistic image' width={300} height={200} />
                <Image src='/about/cargo.desktop.png' alt='logistic image' width={600} height={200} />

            </div>
        </div>
    )
}
