'use client'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [desktopSize, setDesktopSize] = useState(false)
  return (
    <div className="lg:flex bg-yellow-300 flex-row-reverse ">
      {desktopSize ? (
        <div className="flex items-center justify-end">
          <Image src={'/track.png'} alt="track image" width={300} height={300} />
        </div>
      ) : (
        <div className="flex  items-center justify-end">
          <Image src={'/track-desktop.png'} alt="track image" width={600} height={600} />
        </div>
      )}


      <div className="max-w-[600px] " >
        <div>
          <h3 className="text-[#2A437C] text-[18px]">LOGIX AT YOUR SERVICE</h3>
          <h2 className="text-[#001E62] font-bold text-[20px]">We Provide <span className="text-[#D13851]">End-to-end Logistics Services</span>  for Timely, Secure Delivery. </h2>
        </div>
        <div>
          <h4 className="text-[#C8102E]">01 Vision</h4>
          <p className="text-[#2A437C]">Our mission is to lead the global logistics industry by providing seamless, reliable, and innovative solutions that not only meet but exceed client expectations, driving long-term success and growth for businesses worldwide.</p>
        </div>
        <div>
          <h4 className="text-[#C8102E]">02 Visions</h4>
          <p className="text-[#2A437C]">We connect businesses to a streamlined and efficient supply chain by offering innovative and responsible logistics solutions that enhance operational performance, reduce costs, and foster growth in a dynamic global market.</p>
        </div>
      </div>

    </div>
  );
}
