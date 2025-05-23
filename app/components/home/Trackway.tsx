import React from 'react'
import Image from 'next/image'
export default function Trackway() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className='relative '>
                <Image
                    className='h-[550px]'
                    src='/home/trackway.png' width={1440} height={100} alt='track way' />
                <h2 className='absolute max-w-[700px] left-10 text-white font-bold text-[40px] top-20'>ჩვენ ვცვლით ლოჯისტიკას მზარდი ბაზრის მოთხოვნებისთვის.</h2>
                <h2 className='absolute max-w-[700px] pr-2 top-75 left-10 text-[#EEEEEE] text-[20px]'>ლოჯისტიკის გარდაქმნა ინოვაციური გადაწყვეტილებებით, უახლესი ტექნოლოგიების და მონაცემებზე დაფუძნებული სტრატეგიების გამოყენებით, რათა გაუმჯობესდეს ეფექტურობა, შემცირდეს ხარჯები და დაკმაყოფილდეს ბაზრის მზარდი მოთხოვნები.</h2>
                {/* <button className='flex border px-4 py-2 cursor-pointer border-white text-white absolute rounded-full right-20 bottom-20'>Learn more
                    <ArrowRight />

                </button> */}
            </div>
            <div className='relative '>
                <Image className=' h-[800px]' src='/home/content.png' width={1440} height={100} alt='content image' />
                <h4 className='absolute top-10 text-white text-[14px] left-15'>მუშაობის პროცესი</h4>
                <h3 className='absolute top-18 text-[30px] font-bold text-white left-15'>როგორ ვმუშაობთ ჩვენ</h3>
                <p className='absolute top-30 right-10  max-w-[550px] text-[20px] text-white  '>ჩვენი პროცესი მარტივია და შედეგზე ორიენტირებული
                    კონსულტაციიდან დაწყებული, დაგეგმვამდე და შესრულებამდე,
                    ყველა დეტალს ზუსტად და პასუხისმგებლობით ვაკონტროლებთ.</p>
                <div
                    //  className='absolute top-55 left-100'
                    // className='flex absolute bottom-50'
                    className='grid grid-cols-1 lg:grid-cols-2  absolute'
                >
                    {/* <PlanningCard number="01" title='strategic planning' description='Designing a plan to ensure efficient and optimal delivery of your goods.' image='/process-card.png' />
                    <PlanningCard number="02" title='strategic planning' description='Designing a plan to ensure efficient and optimal delivery of your goods.' image='/process-card.png' />
                    <PlanningCard number="03" title='strategic planning' description='Designing a plan to ensure efficient and optimal delivery of your goods.' image='/process-card.png' />
                    <PlanningCard number="04" title='strategic planning' description='Designing a plan to ensure efficient and optimal delivery of your goods.' image='/process-card.png' /> */}

                </div>
            </div>


        </div >
    )
}
