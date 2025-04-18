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
                    <Image src='/home/track.png' alt="track image" width={300} height={300} />
                </div>
            ) : (
                <div className="flex  items-center justify-end">
                    <Image src='/home/track-desktop.png' alt="track image" width={600} height={600} />
                </div>
            )}


            <div className="max-w-[600px] mx-auto p-7 flex flex-col gap-7 " >
                <div className="">
                    <h3 className="text-[#2A437C] text-[18px]">ემკოია თქვენს სამსახურში</h3>
                    <h2 className="text-[#001E62] max-w-[500px] font-bold text-[32px]">ჩვენ გთავაზობთ <span className="text-[#D13851]">უმაღლესი ხარისხის ლოჯისტიკურ სერვისს</span>  დროული და უსაფრთხო მიწოდებისთვის </h2>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">01 ხედვა</h4>
                    <p className="text-[#2A437C]">ჩვენი მიზანია ვიყოთ გლობალური ლოჯისტიკის ინდუსტრიის ლიდერები, ვაწვდიდეთ უწყვეტ, სანდო და ინოვაციურ გადაწყვეტილებებს, რომლებიც არამხოლოდ აკმაყოფილებენ, არამედ აღემატებიან კლიენტების მოლოდინს, რითაც ხელს ვუწყობთ ბიზნესების გრძელვადიან წარმატებასა და ზრდას მთელს მსოფლიოში</p>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">02 ხედვა</h4>
                    <p className="text-[#2A437C]">ჩვენ ვაკავშირებთ ბიზნესებს ოპტიმალიზირებულ და ეფექტურ მომარაგების ჯაჭვთან, ინოვაციური და პასუხისმგებლიანი ლოჯისტიკური გადაწყვეტილებების შეთავაზებით, რაც აძლიერებს ოპერაციულ ეფექტურობას, ამცირებს ხარჯებს და ხელს უწყობს ეფექტურობას, ამცირებს ხარჯებს და ხელს უწყობს ზრდას სწრაფად ცვალებად გლობალურ ბაზარზე.</p>
                </div>

            </div>

        </div>
    );
}
