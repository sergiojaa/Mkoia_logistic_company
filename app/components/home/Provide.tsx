'use client'
import Image from "next/image";
import { useState } from "react";
export default function Provide() {
    const [desktopSize, setDesktopSize] = useState(false)
    console.log(setDesktopSize)
    return (
        <div className="lg:flex max-w-[1300px] mx-auto  flex-row-reverse ">
            {desktopSize ? (
                <div className="flex items-center justify-end">
                    <Image src='https://t3.ftcdn.net/jpg/05/61/55/22/360_F_561552282_mGKd3af96Iw4TAjVj1NT8E9G6SNgxrPc.jpg' alt="track image" width={300} height={300} />
                </div>
            ) : (
                <div className="flex  items-center justify-end">
                    <Image src='https://t3.ftcdn.net/jpg/05/61/55/22/360_F_561552282_mGKd3af96Iw4TAjVj1NT8E9G6SNgxrPc.jpg' alt="track image" width={600} height={600} />
                </div>
            )}


            <div className="max-w-[600px] mx-auto p-7 flex flex-col gap-7 " >
                <div className="">
                    <h3 className="text-[#2A437C] text-[18px]">ემკოია თქვენს სამსახურში</h3>
                    <h2 className="text-[#001E62] max-w-[500px] font-bold text-[28px]">ჩვენ გთავაზობთ <span className="text-[#D13851]">უმაღლესი ხარისხის ლოჯისტიკურ სერვისს</span>  დროული და უსაფრთხო მიწოდებისთვის </h2>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">01 ხედვა</h4>
                    <p className="text-[#2A437C]">ჩვენი მიზანია ვიყოთ გლობალური ლოჯისტიკის ინდუსტრიის ლიდერები, ვიღებდეთ ინოვაციურ და სანდო გადაწყვეტილებებს, რომლებიც აღემატება კლიენტების მოლოდინს და ხელს უწყობს მათ გრძელვადიან წარმატებას</p>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">02 ხედვა</h4>
                    <p className="text-[#2A437C]">ჩვენ ვაკავშირებთ ბიზნესებს ეფექტურ და ინოვაციურ მომარაგების ჯაჭვთან, რითაც ვაძლიერებთ ოპერაციულ ეფექტურობას, ვამცირებთ ხარჯებს და ხელს ვუწყობთ მათ ზრდას</p>
                </div>

            </div>

        </div>
    );
}
