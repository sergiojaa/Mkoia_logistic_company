import React from 'react'

export default function ContactInfoTexts() {
    return (
        <div>
            <div className='flex flex-col gap-7'>
                <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C]">CONTACT INFO</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[#001E62]  text-4xl md:text-5xl  max-w-[545px] leading-tight'>Connect <span className='text-[#D13851]'>with Us</span> Today and We will Help Your Business</h2>
                    <p className='text-[#2A437C] text-[19px] max-w-[595px]'>Ready to take your logistics to the next level? Contact us today to discover how our tailored solutions and  industry expertise can transform your supply chain.</p>
                </div>
            </div>
        </div>
    )
}
