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
                        image='https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/449266907_1971718053245440_2545998577636563752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGlI6rnCmHkdVgbpJjx012jIjoODRxFrjciOg4NHEWuN4whzlsGTOreOqFGczFBAVhpS5tOGuYVm2q4ynDFRomx&_nc_ohc=ux0ns9qZhr4Q7kNvwHA9Dbt&_nc_oc=AdmcpkJ60XS1bwBMXdsgAazJqXsKq6QC2q4IEiFqA-RD0_fIRw8yoLJXG8cDnceH6x4&_nc_zt=23&_nc_ht=scontent.ftbs4-2.fna&_nc_gid=w-IGBOJ-rbEuFBz3b8J4Ww&oh=00_AfHTDKKtuB89XRsEM8N2C4BUwdZAvwuwUAYsD_djfVRE9w&oe=680D9DE1'
                        location='თბილისი, საქართველო'
                        title='ჩვენი საუკეთესო ლოჯისტიკური პარტნიორი'
                        description='წინასწარ ჩამოყალიბებული კომუნიკაცია და შეუფერხებელი კოორდინაცია მათი მხრიდან ჩვენი ოპერაციების წარმატების მთავარი საფუძველი გახდა. ისინი უზადო ზრუნვით აგვარებენ ყველა დეტალს. მათთან თანამშრომლობა უპირატესობაა!'
                        companyName='შ.პ.ს რებილდი'
                        clientsSince='თანამშრომლობა 2023 წლიდან'

                    />

                </div>

            </div>
        </div>
    )
}
