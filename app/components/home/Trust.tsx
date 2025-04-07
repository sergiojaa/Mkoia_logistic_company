import React from 'react'
import TrustCard from './TrustCard'

export default function Trust() {
    return (
        <div className='max-w-[1150px] w-full mx-auto'>

            <div className='flex flex-col gap-5 items-start'>
                <h3 className='text-[#2A437C]'>TESTIMONIALS</h3>
                <div className='lg:flex items-center gap-56  '>
                    <h1 className='text-[#001E62] text-3xl font-bold'> <span className='text-[#C8102E]'>Trusted</span> by Worldwide</h1>
                    <p className='text-[#2A437C] max-w-[620px] text-lg'>Many companies already work with us. Praise pleases us, criticism helps us because we want to get better every day.</p>
                </div>
                <div className='max-w-[1200px] w-full flex flex-col'>
                    <TrustCard />
                    <TrustCard />
                </div>

            </div>
        </div>
    )
}
