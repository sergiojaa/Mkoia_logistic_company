import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness } from 'lucide-react'
interface TrustCards {
    image: string,
    location: string,
    description: string,
    companyName: string,
    clientsSince: string
}
export default function TrustCard({ image, location, description, companyName, clientsSince }: TrustCards) {
    return (
        <div className="w-full mb-10 px-7 lg:px-0  mx-auto">
            <div className='flex flex-col lg:flex-row items-center h-[900px] md:h-[600px] lg:h-[400px]   justify-around  p-5 border border-[#CCD2DF] rounded-xl  '>

                <div className=''>
                    <Image src={image} alt='track' width={230} height={100} />
                </div>
                <div className='flex flex-col mt-5 items-start gap-5'>
                    <h2 className='text-xl text-[#CCD2DF]'>{location}</h2>


                    <p className='max-w-[500px] text-md text-[#808EB0]'>
                        {description}
                    </p>
                    <p className='text-[#001E62] font-bold text-2xl'> <span className='text-[#D13851]'>{companyName} </span>  </p>
                    <div className='flex items-center gap-3'>
                        <BriefcaseBusiness className='text-[#808EB0]' />
                        <p className='text-md text-[#808EB0]'>{clientsSince}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
