'use client'
import React, { useState } from 'react'
import Question from './Question'
import questions from './questions.json'
import { useTranslate } from '@/app/utils/translate'
export default function Faq() {
    const t = useTranslate()

    const [active, setActive] = useState(0)

    return (
        <div className='max-w-[1200px] mt-20 mx-auto'>
            <div className='flex  flex-col gap-7 justify-center items-center'>

                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">{t('faq')}</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='text-[#001E62] text-2xl lg:text-3xl mx-auto max-w-[450px] text-center'>{t('compherensive')} <span className='text-[#D13851]'>{t('questions')}</span> {t('about-our-servies')}</p>
                </div>

            </div>
            <div className="flex  mt-10 flex-col items-center justify-center">
                <div className="flex flex-col w-full max-w-[800px] gap-4">
                    {questions.map((questionObj, index) => (
                        <Question
                            key={index}
                            questionNumber={index + 1}
                            questionObj={questionObj}
                            active={active}
                            setActive={setActive}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
