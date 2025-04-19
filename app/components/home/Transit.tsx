import React from 'react'
import Card from './Card'

export default function Transit() {
    return (
        <div className='max-w-[1200px] p-7 mx-auto '>
            <div className='flex flex-col items-center'>
                <h4 className='text-[#2A437C] text-[14px]'>ჩვენი სატვირთო გადაწყვეტა </h4>
                <h2 className='text-[#001E62] text-[22px] max-w-[430px]  text-center'> <span className='text-[#D13851]'>ყოველი ნაბიჯის </span> პროფესიონალურად მართვა ტრანზიტიდან საწყობამდე</h2>
            </div>
            <div className=" flex items-center justify-center flex-col mt-10 lg:flex-row gap-10  ">
                <div className='md:flex-row items-center justify-between  flex flex-col    gap-15'>
                    <Card
                        src='/home/airplane.png'
                        button="საჰაერო გადაზიდვა"
                        text="სწრაფი და სანდო გადაზიდვა მაღალი მნიშვნელობის ტვირთებისთვის მსოფლიოს გარშემო"
                    />
                    <Card
                        src='/home/airplane.png'
                        button="საზღვაო გადაზიდვა"
                        text="ეკონომიური და ეკოლოგიურად სუფთა, იდეალურია დიდი მოცულობისა და შორ მანძილზე."
                    />


                    <Card
                        src='/home/airplane.png'
                        button="სახმელეთო გადაზიდვა"
                        text="ეფექტური ტრანსპორტირება რეგიონალური გადაზიდვებისთვის მოქნილი გრაფიკით."
                    />
                </div>

            </div>


        </div>
    )
}
