import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness } from 'lucide-react'
export default function TrustCard() {
    return (
        <div className='flex flex-col   mx-auto max-w-[1200px] w-full border-[#CCD2DF] p-5 lg:flex-row border rounded-xl gap-10 items-center lg:items-start justify-center'>
            <div  >
                <Image src={'/picture.png'} alt='track' width={300} height={100} />
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-xl text-[#CCD2DF]'>Tbilisi, Georgia</h2>
                <p className='text-3xl text-[#001E62] font-bold max-w-[600px]'>“Allowing us to focus on growth Highly recommended!”</p>
                <p className='max-w-[500px] text-md text-[#808EB0]'>"Their seamless coordination and proactive communication have made a real difference in our operations. From customs clearance to last-mile delivery, they’ve handled every detail with expertise and care. We couldn’t ask for a better logistics partner."</p>
                <p className='text-[#001E62] font-bold text-2xl'>Cocacola</p>
                <div className='flex items-center gap-3'>
                    <BriefcaseBusiness className='text-[#808EB0]' />
                    <p className='text-md text-[#808EB0]'>Client since 2010</p>
                </div>

            </div>
        </div>
    )
}
