import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Question({ active, setActive, questionNumber, questionObj, }: any) {
    return (
        <div>
            <div className=' border-b flex flex-col gap-3 border-b-[#CCD2DF] py-5'>
                <div
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0)
                        } else {
                            setActive(questionNumber)

                        }

                    }}
                    className='flex cursor-pointer items-center justify-between'>
                    <p
                        className='text-[#001E62]  text-xl'
                    >
                        {questionObj.question}
                    </p>
                    <span
                        onClick={() => setActive(active ? 0 : questionNumber)}
                        className="cursor-pointer"
                    >
                        {active ? (
                            <ChevronUp className="w-6 h-6 text-[#001E62]" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-[#001E62]" />
                        )}
                    </span>
                </div>


                {active === questionNumber ? (
                    <p className='text-[#556996] text-sm'>{questionObj.answer}</p>

                ) : null}



            </div>
        </div>
    )
}
