import React from 'react'
import Image from 'next/image'
import { CheckCheck, Lightbulb, Users, Leaf } from 'lucide-react';
const values = [
    { icon: <CheckCheck className="text-[#001E62]" size={24} />, label: 'Reliability' },
    { icon: <Lightbulb className="text-[#001E62]" size={24} />, label: 'Innovation' },
    { icon: <Users className="text-[#001E62]" size={24} />, label: 'Customer Focus' },
    { icon: <Leaf className="text-[#001E62]" size={24} />, label: 'Sustainability' },
];
export default function Whoarewe() {
    return (
        <div className='w-full mt-10 p-5'>
            <div className='flex flex-col gap-10 justify-center lg:flex-row lg:justify-between items-center'>
                <div className='flex max-w-[700px] flex-col gap-7'>
                    <div className='flex items-center'>
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <h3>Who are we</h3>
                    </div>
                    <h2 className='text-[#001E62] max-w-[520px] text-4xl'>We Specialize in <span className='text-[#D13851]'> End-to-end Logistics Services</span> That Ensure Timely and Secure Delivery</h2>
                    <p className='text-[#2A437C] max-w-[550px] text-md '>Our dedicated team works around the clock to provide tailored solutions for good businesses of all sizes, helping you meet your goals with ease and reliability. Start from customs brokerage to last-mile delivery, we’re committed to quality and precision in every service we offer. </p>
                    <div className='max-w-[490px] border-b-4 border-b-[#D13851] rounded-xl p-5 bg-[#EEF4FF]'>
                        <h2 className='text-[#001E62] font-bold'>
                            We simplify logistics with advanced technology, so you can focus on business growth
                        </h2>
                    </div>
                </div>
                <div className="relative w-full max-w-[400px]">
                    <Image
                        src="/about/containers.png"
                        alt="logistic containers"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute bottom-5 left-5  bg-white rounded-xl shadow-md p-6 w-[70%] max-w-xs space-y-4">
                        {values.map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-3 text-[#001E62] font-medium text-lg">
                                {icon}
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </div>
    )
}
