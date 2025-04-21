import React from 'react'
import TrustCard from './TrustCard'

export default function Trust() {
    return (
        <div className='max-w-[1150px] mt-10  w-full mx-auto'>

            <div className='flex  flex-col gap-5 items-start'>
                <h3 className='text-[#2A437C] lg:px-0 px-7'>მომხმარებელთა შეფასებები</h3>
                <div className='lg:flex items-center px-7 lg:px-0 gap-52  '>
                    <h1 className='text-[#001E62]  text-3xl font-bold'> <span className='text-[#C8102E]'>ნდობა</span> რეგიონის გარშემო</h1>
                    <p className='text-[#2A437C] max-w-[620px] text-lg'>მრავალ კომპანიასთან უკვე ვთანამშრომლობთ, ქება გვსიამოვნებს, ხოლო კრიტიკა ხელს უწყობს ჩვენს გაუმჯობესებას</p>
                </div>
                <div className='max-w-[1200px] w-full flex flex-col'>
                    <TrustCard
                        image='https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png'
                        location='თბილისი, საქართველო'
                        title='გვეხმარება ჩვენი პროექტების დროულად დასრულებაში'
                        description='მათმა შეუფერხებელმა კოორდინაციამ და წინასწარმა კომუნიკაციამ ნამდვილად შეცვალა ჩვენი ოპერაციები. საბაჟო გამტარობიდან დაწყებული, ბოლო კილომეტრის მიწოდებამდე.მათ ყველა პრობლემა სპეციალისტური ყურადღებით და ზუსტად მოაგვარეს. ჩვენთვის უკეთესი ლოჯისტიკური პარტნიორი არ არსებობს!'
                        companyName='Coca-Cola Bottlers Georgia'
                        clientsSince='თანამშრომლობა 2023 წლიდან'

                    />
                    <TrustCard
                        image='https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png'
                        location='თბილისი, საქართველო'
                        title='გვეხმარება ჩვენი პროექტების დროულად დასრულებაში'
                        description='მათმა შეუფერხებელმა კოორდინაციამ და წინასწარმა კომუნიკაციამ ნამდვილად შეცვალა ჩვენი ოპერაციები. საბაჟო გამტარობიდან დაწყებული, ბოლო კილომეტრის მიწოდებამდე.მათ ყველა პრობლემა სპეციალისტური ყურადღებით და ზუსტად მოაგვარეს. ჩვენთვის უკეთესი ლოჯისტიკური პარტნიორი არ არსებობს!'
                        companyName='Coca-Cola Bottlers Georgia'
                        clientsSince='თანამშრომლობა 2023 წლიდან'

                    />

                </div>

            </div>
        </div>
    )
}
