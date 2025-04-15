import React from 'react'
export default function Question({ active, setActive, questionNumber }: any) {
    return (
        <div>
            <div>
                <p onClick={() => {
                    if (active === questionNumber) {
                        setActive(0)
                    } else {
                        setActive(questionNumber)

                    }

                }} >question {questionNumber}</p>

                {active === questionNumber ? <p>answer {questionNumber}</p> : null}
            </div>
        </div>
    )
}
