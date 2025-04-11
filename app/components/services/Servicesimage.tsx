import React from 'react'
import Image from 'next/image'
export default function Servicesimage() {
    return (
        <div className='w-full p-5'>
            <div>
                <Image src='/services/first-image.png' alt='logistic image' width={1200} height={100} />
            </div>
            <div>
                <h2>Logistics Services</h2>
                <p>Our comprehensive logistics solution is designed to optimize your supply chain and enhance your business operations.</p>
                <p>CUSTOM SOLUTIONS FOR EVERY NEED</p>
            </div>
        </div>
    )
}
