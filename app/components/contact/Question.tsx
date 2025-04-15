import React from 'react'
export default function Question({ active, setActive }: any) {
    return (
        <div>
            <div>
                <p onClick={() => {
                    if (active === 1) {
                        setActive(0)
                    } else {
                        setActive(1)

                    }

                }} >question1</p>

                {active === 1 ? <p>answer1</p> : null}
            </div>
        </div>
    )
}
