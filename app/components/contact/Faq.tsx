'use client'
import React, { useState } from 'react'

export default function Faq() {
    const [active, setActive] = useState(0)
    console.log(active)
    return (
        <div className='max-w-[1200px] mt-20 mx-auto'>
            <div className='flex  flex-col gap-7 justify-center items-center'>

                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">FREQUENTLY ASK QUESTION</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='text-[#001E62] text-2xl lg:text-3xl mx-auto max-w-[450px] text-center'>Comprehensive <span className='text-[#D13851]'>Questions</span> About Our Services </p>
                </div>
                <div>
                    <p onClick={() => setActive(1)} >question1</p>
                    <p>answer1</p>
                </div>
                <div>
                    <p onClick={() => setActive(2)}>question2</p>
                    <p>answer2</p>
                </div>
                <div>
                    <p onClick={() => setActive(3)}>question3</p>
                    <p>answer3</p>
                </div>
                <div>
                    <p onClick={() => setActive(4)}>question4</p>
                    <p>answer4</p>
                </div>
                <div>
                    <p onClick={() => setActive(5)}>question5</p>
                    <p>answer5</p>
                </div>
            </div>
        </div>
    )
}
