import React from 'react'
export default function Question({ active, setActive, questionNumber, questionObj, }: any) {
    return (
        <div>
            <div>
                <p onClick={() => {
                    if (active === questionNumber) {
                        setActive(0)
                    } else {
                        setActive(questionNumber)

                    }

                }} >
                    {questionObj.question}
                </p>
                {active === questionNumber ? (
                    <p>{questionObj.answer}</p>

                ) : null}


            </div>
        </div>
    )
}
