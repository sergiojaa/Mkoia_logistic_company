import React from 'react'

export default function ContactInfoTexts() {
    return (
        <div>
            <div className='flex flex-col gap-7'>
                <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C]">საკონტაქტო ინფორმაცია</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[#001E62]  text-4xl   max-w-[545px] leading-tight'>დაგვიკავშირდით და დავეხმარებით  <span className='text-[#D13851]'>თქვენს ბიზნესს</span> </h2>
                    <p className='text-[#2A437C] text-[19px] max-w-[595px]'>მზად ხართ აიყვანოთ თქვენი ლოჯისტიკა შემდეგ დონეზე? დაგვიკავშირდით დღეს იმის გასარკვევად, თუ როგორ შეუძლია ჩვენი მორგებული გადაწყვეტილებები და ინდუსტრიის გამოცდილება გარდაქმნას თქვენი მიწოდების ჯაჭვი.</p>
                </div>
            </div>
        </div>
    )
}
