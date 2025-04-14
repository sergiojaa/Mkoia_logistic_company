import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function MapImage() {
    return (
        <div className='w-full px-7 mx-auto'>
            <div className='flex bg-blue-500 gap-10 p-20 lg:items-start  mt-20 lg:flex-row flex-col items-center'>
                <div className=" max-w-[900px]" >
                    <iframe
                        className="w-[350px] md:w-[500px] h-[350px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190417.3572826923!2d44.617697061999415!3d41.77936843825734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473004520e219%3A0x12a16a9ac1bbbcc6!2zTHRkIE1rb2lhIOGDqOGDnuGDoSDhg5Thg5vhg5nhg53hg5jhg5A!5e0!3m2!1ska!2sge!4v1744639175604!5m2!1ska!2sge"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className="flex lg:mt-10 items-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className=" text-[#2A437C]">FIND US</p>
                    </div>
                    <div className='max-w-[350px]'>
                        <p className='text-white text-2xl'>Conveniently Located for Easy <br /> Access to All Major Logistics  Routes</p>

                    </div>
                    <div >
                        <button className="flex max-w-max bg-[#001E62] text-white  hover:text-white cursor-pointer items-center gap-3 rounded-full    px-6 py-2 transition-colors ">
                            <span className=''>Find The Direction</span>
                            <div className="border  rounded-full p-1  ">
                                <ArrowRight size={16} />
                            </div>
                        </button>
                    </div>
                </div>

            </div >
        </div>

    )
}
