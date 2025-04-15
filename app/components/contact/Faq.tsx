'use client'
import React, { useState } from 'react'
import Question from './Question'

export default function Faq() {
    const [active, setActive] = useState(0)
    const questionNumbers = [
        1, 2, 3, 4, 5
    ]
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
                {questionNumbers.map(questionNumber => {
                    return (
                        <div key={questionNumber}>
                            <Question active={active} setActive={setActive} questionNumber={questionNumber} />

                        </div>

                    )
                })}

            </div>
        </div>
    )
}
