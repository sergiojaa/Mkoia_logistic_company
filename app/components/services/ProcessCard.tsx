import React from 'react'
interface Process {
    plan: string,
    title: string,
    description: string
}
export default function ProcessCard({ plan, title, description }: Process) {
    return (
        <div>
            <div className="flex max-w-[430px] gap-8 items-center">
                <div>
                    <h3 className=' text-4xl text-[#AAB4CB]'>{plan}</h3>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h4 className='text-[#001E62]  text-xl'>{title}</h4>
                    <p className='text-[#2A437C] text-md'>{description}</p>
                </div>

            </div>
        </div>
    )
}
