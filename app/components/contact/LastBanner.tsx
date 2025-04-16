import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
export default function LastBanner() {
    return (
        <div>
            <div>
                <Image
                    className='md:hidden'
                    src='/contact/lastbanner-mobile.png' width={500} height={300} alt=' logistic company contact image' />
                <Image
                    className='hidden md:block'
                    src='/contact/lastbanner-desktop.png' width={1200} height={300} alt=' logistic company contact image' />
                <div>
                    <h2>Contact us to discuss how our services can support your business and streamline your logistics needs.</h2>
                    <div >
                        <button className="flex max-w-max bg-white text-[#001E62]  hover:text-white cursor-pointer items-center gap-3 rounded-full    px-6 py-2 transition-colors ">
                            <span className=''>Contact Us</span>
                            <div className="border bg-[#001E62] text-white  rounded-full p-1  ">
                                <ArrowRight size={16} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
