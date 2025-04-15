import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Question({ active, setActive, questionNumber, questionObj, }: any) {
    return (
        <div className="px-7 lg:px-0">
            <div className="border-b flex flex-col gap-3 border-b-[#CCD2DF] py-5">
                <div
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0);
                        } else {
                            setActive(questionNumber);
                        }
                    }}
                    className="flex cursor-pointer items-center justify-between"
                >
                    <p className="text-[#001E62] text-base lg:text-2xl max-w-[85%]">
                        {questionObj.question}
                    </p>
                    <span className={`shrink-0 transition-transform duration-300 ease-in-out ${active === questionNumber ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <ChevronDown className="w-6 h-6 text-[#001E62]" />
                    </span>

                </div>

                <div
                    className={`text-[#556996] text-sm overflow-hidden transition-all duration-300 ease-in-out ${active === questionNumber ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    {questionObj.answer}
                </div>

            </div>
        </div>

    )
}
