import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Cargo() {
    return (
        <div className="bg-[#001E62] rounded-xl flex flex-col lg:flex-row items-center lg:items-start mt-10 p-5 lg:p-10">
            <div>
                <Image
                    src="/about/cargo.mobile.png"
                    alt="logistic image"
                    width={322}
                    height={200}
                    className="block lg:hidden rounded-lg"
                />
                <Image
                    src="/about/cargo.desktop.png"
                    alt="logistic image"
                    width={600}
                    height={400}
                    className="hidden lg:block py-5 pr-5 pl-0 rounded-lg"
                />
            </div>

            <div className="flex flex-col gap-6 lg:gap-10 lg:pt-7 lg:pl-5 mt-7 lg:mt-0 max-w-xl text-center lg:text-left">
                <h2 className="text-white text-3xl lg:text-[36px]  leading-snug">
                    Let Our Team Handle your <br className="hidden lg:block" />
                    Cargo with Care
                </h2>

                <p className="text-[#BDBDBD]     text-lg">
                    Our experienced team ensures your cargo is handled with the utmost care,
                    providing safe and timely delivery every step of the way.
                </p>

                <button className="flex items-center gap-2 px-5 py-3 bg-white rounded-full max-w-max transition hover:scale-105 hover:shadow-lg">
                    <span className="text-[#001E62] text-lg font-medium">Contact Us</span>
                    <ArrowRight className="text-white bg-[#001E62] rounded-full p-1 w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
