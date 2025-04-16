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


            <div className="max-w-[600px] mx-auto pl-10 flex flex-col gap-7 " >
                <div className="">
                    <h3 className="text-[#2A437C] text-[18px]">LOGIX AT YOUR SERVICE</h3>
                    <h2 className="text-[#001E62] max-w-[500px] font-bold text-[32px]">We Provide <span className="text-[#D13851]">End-to-end Logistics Services</span>  for Timely, Secure Delivery. </h2>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">01 Vision</h4>
                    <p className="text-[#2A437C]">Our mission is to lead the global logistics industry by providing seamless, reliable, and innovative solutions that not only meet but exceed client expectations, driving long-term success and growth for businesses worldwide.</p>
                </div>
                <div className="flex lg:flex-row lg:gap-20 flex-col gap-4">
                    <h4 className="text-[#C8102E] font-bold text-[20px]">02 Vision</h4>
                    <p className="text-[#2A437C]">We connect businesses to a streamlined and efficient supply chain by offering innovative and responsible logistics solutions that enhance operational performance, reduce costs, and foster growth in a dynamic global market.</p>
                </div>

            </div>

        </div>
    );
}
