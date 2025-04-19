import React from 'react'
import ServiceCards from './ServiceCards'

export default function Services() {
    return (
        <div className='max-w-[1200px] mt-10 px-7 mx-auto '>
            <div className='flex flex-col items-center justify-between'>
                <h3>ჩვენი ლოჯისტიკური სერვისი</h3>
                <h2 className='text-[#001E62] max-w-[420px] text-center text-[22px]'>სრული <span className='text-[#D13851]'>ლოჯისტიკური სერვისები</span>  მორგებული თქვენს უნიკალურ <span className='text-[#D13851]'>საჭიროებებზე</span> </h2>
            </div>
            <div className='flex flex-col gap-10 '>
                <ServiceCards icon='/home/custom-icon.png' title='საწყობი & დისტრიბუცია'
                    description='გთავაზობთ უსაფრთხო შენახვას და ეფექტურ განაწილებას, რათა ინვენტარი შეუფერხებლად გადაადგილდეს.' />
                <ServiceCards
                    icon='/home/third-icon.png'
                    title='მიწოდების ჯაჭვის ელემენტი'
                    description='საბაჟო პროცესების ეფექტურად მართვა, რათა თქვენი ტვირთი სწრაფად და კანონიერად გადმოსცდეს საზღვრებს' />
                <ServiceCards icon='/home/fifth-icon.png' title='ზუსტ წერტილამდე მოტანა'
                    description='სანდო ზუსტ წერტილამდე მოტანა, რაც თქვენ გიხსნით კიდევ სხვა პასუხისმგებლობებს' />
                <ServiceCards icon='/home/sixth-icon.png' title='ტვირთის მართვა'
                    description='სპეციალიზებული დამუშავება დიდი და რთული გადაზიდვებისთვის, მორგებული გადაწყვეტილებებით.' />

            </div>

        </div>
    )
}
