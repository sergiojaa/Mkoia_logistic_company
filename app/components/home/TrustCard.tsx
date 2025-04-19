import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness } from 'lucide-react'

export default function TrustCard() {
    return (
        <div className="w-full mb-10 px-7  mx-auto">
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-around  p-5 border border-[#CCD2DF] rounded-xl  '>

                <div className='w-[300px] mt-25 bg-red-100 '>
                    <Image src='https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png' alt='track' width={330} height={100} />
                </div>
                <div className='flex flex-col mt-5 items-start gap-5'>
                    <h2 className='text-xl text-[#CCD2DF]'>თბილისი, საქართველო</h2>
                    <p className='text-3xl text-[#001E62] font-bold max-w-[600px]'>
                        გვეხმარება ჩვენი პროექტების დროულად დასრულებაში!
                    </p>

                    <p className='max-w-[500px] text-md text-[#808EB0]'>
                        მათმა შეუფერხებელმა კოორდინაციამ და წინასწარმა კომუნიკაციამ ნამდვილად შეცვალა ჩვენი ოპერაციები. საბაჟო გამტარობიდან დაწყებული, ბოლო კილომეტრის მიწოდებამდე. მათ ყველა პრობლემა სპეციალისტური ყურადღებით და ზუსტად მოაგვარეს. ჩვენთვის უკეთესი ლოჯისტიკური პარტნიორი არ არსებობს
                    </p>
                    <p className='text-[#001E62] font-bold text-2xl'>Coca-Cola Bottlers Georgia </p>
                    <div className='flex items-center gap-3'>
                        <BriefcaseBusiness className='text-[#808EB0]' />
                        <p className='text-md text-[#808EB0]'>თანამშრომლობა 2023 წლიდან</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
