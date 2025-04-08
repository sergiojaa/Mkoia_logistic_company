import React from 'react'

export default function Whoarewe() {
    return (
        <div className='w-full p-5'>
            <div className='flex max-w-[700px] flex-col gap-5'>
                <div className='flex items-center'>
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <h3>Who are we</h3>
                </div>
                {/* <div className='max-w-[520px]'> */}
                <h2 className='text-[#001E62] max-w-[520px] text-4xl'>We Specialize in <span className='text-[#D13851]'> End-to-end Logistics Services</span> That Ensure Timely and Secure Delivery</h2>
                <p className='text-[#2A437C] max-w-[500px] text-md '>Our dedicated team works around the clock to provide tailored solutions for good businesses of all sizes, helping you meet your goals with ease and reliability. Start from customs brokerage to last-mile delivery, we’re committed to quality and precision in every service we offer. </p>
                {/* </div> */}
                <div className='max-w-[490px] border-b-4 border-b-[#D13851] rounded-xl p-5 bg-[#EEF4FF]'>
                    <h2 className='text-[#001E62] font-bold'>
                        We simplify logistics with advanced technology, so you can focus on business growth
                    </h2>
                </div>


            </div>
        </div>
    )
}
