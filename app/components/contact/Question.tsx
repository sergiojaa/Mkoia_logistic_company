import React from 'react'
export default function Question({ active, setActive, questionNumber, questionObj, }: any) {
    return (
        <div>
            <div className=' border-b flex flex-col gap-3 border-b-[#CCD2DF] py-5'>
                <p
                    className='text-[#001E62] cursor-pointer text-xl'
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0)
                        } else {
                            setActive(questionNumber)

                        }

                    }} >
                    {questionObj.question}
                </p>
                {active === questionNumber ? (
                    <p className='text-[#556996] text-sm'>{questionObj.answer}</p>

                ) : null}


            </div>
        </div>
    )
}
