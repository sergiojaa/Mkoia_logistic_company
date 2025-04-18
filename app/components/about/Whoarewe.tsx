import React from 'react'
import Image from 'next/image'
import { CheckCheck, Lightbulb, Users, Leaf } from 'lucide-react';
const values = [
    { icon: <CheckCheck className="text-[#001E62]" size={24} />, label: 'სანდოობა' },
    { icon: <Lightbulb className="text-[#001E62]" size={24} />, label: 'ინოვაცია' },
    { icon: <Users className="text-[#001E62]" size={24} />, label: 'თქვენი მოთხოვნა' },
    { icon: <Leaf className="text-[#001E62]" size={24} />, label: 'მდგრადობა' },
];
export default function Whoarewe() {
    return (
        <div className='w-full mt-10 p-5'>
            <div className='flex flex-col gap-10 justify-center lg:flex-row lg:justify-between items-center'>
                <div className='flex max-w-[700px] flex-col gap-7'>
                    <div className='flex items-center'>
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <h3>ვინ ვართ ჩვენ</h3>
                    </div>
                    <h2 className='text-[#001E62] max-w-[520px] text-4xl'>ჩვენ ვსპეციალიზირდებით <span className='text-[#D13851]'> მახალი ხარისხის ლოჯისტიკურ სერვისში</span> რომელიც გპირდებათ დროულ და უსაფრთხო მიწოდებას</h2>
                    <p className='text-[#2A437C] max-w-[550px] text-md '>
                        ჩვენი ერთგული გუნდი მუშაობს უწყვეტ რეჟიმში, რათა უზრუნველყოს მორგებული გადაწყვეტილებები ყველა ზომის ბიზნესისთვის, რაც გეხმარებათ მიზნების მარტივად და სანდრო შესრულებაში. საბაჟო ბროკერობიდან დაწყებული, ბოლო კილომეტრის მიწოდებამდე, ჩვენ ვალდებულნი ვართ ვუზრუნველყოთ მაღალი ხარისხი და სიზუსტე თითოეულ სერვისში
                    </p>
                    <div className='max-w-[490px] border-b-4 border-b-[#D13851] rounded-xl p-5 bg-[#EEF4FF]'>
                        <h2 className='text-[#001E62] font-bold'>
                            ჩვენ ვამარტივებთ ლოჯისტიკას მოწინავე ტექნოლოგიით, ასე რომ თქვენ შეგიძლიათ ფოკუსირება მოახდინოთ ბიზნესის ზრდაზე                        </h2>
                    </div>
                </div>
                <div className="relative w-full max-w-[400px]">
                    <Image
                        src="/about/containers.png"
                        alt="logistic containers"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute bottom-5 left-5  bg-white rounded-xl shadow-md p-6 w-[70%] max-w-xs space-y-4">
                        {values.map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-3 text-[#001E62] font-medium text-lg">
                                {icon}
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </div>
    )
}
