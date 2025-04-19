import React from 'react'
import TrustCard from './TrustCard'

export default function Trust() {
    return (
        <div className='max-w-[1150px] px-7 w-full mx-auto'>

            <div className='flex flex-col gap-5 items-start'>
                <h3 className='text-[#2A437C]'>მომხმარებელთა შეფასებები</h3>
                <div className='lg:flex items-center gap-52  '>
                    <h1 className='text-[#001E62]  text-3xl font-bold'> <span className='text-[#C8102E]'>ნდობა</span> რეგიონის გარშემო</h1>
                    <p className='text-[#2A437C] max-w-[620px] text-lg'>მრავალ კომპანიასთან უკვე ვთანამშრომლობთ, ქება გვსიამოვნებს, ხოლო კრიტიკა ხელს უწყობს ჩვენს გაუმჯობესებას</p>
                </div>
                <div className='max-w-[1200px] w-full flex flex-col'>
                    <TrustCard />
                    {/* <TrustCard /> */}
                </div>

            </div>
        </div>
    )
}
