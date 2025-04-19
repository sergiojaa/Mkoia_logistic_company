import React from 'react'
import ServiceCards from './ServiceCards'
import { SquareUser } from 'lucide-react'

export default function Service() {
    return (
        <div className='w-full mx-auto mt-10 px-7 '>
            <div className='flex  flex-col gap-7 justify-center items-center'>
                <div className="flex  items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                    <p className=" text-[#2A437C] text-md   ">ლოჯისტიკური სერვისები</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='text-[#001E62] text-xl lg:text-2xl mx-auto max-w-[510px] text-center'>ყოვლისმომცველი <span className='text-[#D13851]'>ლოჯისტიკური სერვისები</span>  რომლებიც მორგებულია თქვენს  <span className='text-[#D13851]'>უნიკალურ საჭიროებებზე</span> </p>
                    <p className='text-[#2A437C] text-center mx-auto max-w-[800px]'>
                        ჩვენი მიზანია ვიყოთ წამყვანი ლოგისტიკური კომპანია სამშენებლო განხრით</p>
                </div>
            </div>
            <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <ServiceCards Icon={SquareUser} title='საწყობი & დისტრიბუცია' description='უსაფრთხო შენახვა და ეფექტური განაწილება თქვენი ინვენტარის შეუფერხებელი მართვისთვის.' />
                <ServiceCards Icon={SquareUser} title='მიწოდების ჯაჭვის მენეჯმენტი' description='მიწოდების ჯაჭვის თითოეული ეტაპის ოპტიმიზაცია ეფექტური და ეკონომიური პროცესებისთვის.' />
                <ServiceCards Icon={SquareUser} title='დროული მიწოდება' description='სანდო ზუსტ წერტილამდე მოტანა, რაც თქვენ გიხსნით კიდევ სხვა პასუხისმგებლობებს.' />
            </div>


        </div>
    )
}
