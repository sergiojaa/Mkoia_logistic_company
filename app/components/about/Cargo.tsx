import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Cargo() {
    return (
        <div className="text-white p-6 mt-10 rounded-lg max-w-full mx-auto relative">
            <div className="absolute inset-0 z-0">
                <Image
                    className="rounded-4xl"
                    src="/about/improve-desktop.png"
                    layout="fill"
                    objectFit="cover"
                    alt="history of mkoia"
                />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

                    <div className="relative">
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
                            className="hidden py-5 pl-5 lg:block rounded-lg"
                        />
                    </div>

                    <div className="flex py-10 flex-col gap-6 lg:gap-10 max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl lg:text-[36px] leading-snug">
                            Let Our Team Handle your <br className="hidden lg:block" />
                            Cargo with Care
                        </h2>

                        <p className="text-[#BDBDBD] text-lg">
                            Our experienced team ensures your cargo is handled with the utmost care,
                            providing safe and timely delivery every step of the way.
                        </p>

                        <button className="flex items-center gap-2 px-5 py-3 bg-white rounded-full max-w-max transition hover:scale-105 hover:shadow-lg mx-auto lg:mx-0">
                            <span className="text-[#001E62] text-lg font-medium">Contact Us</span>
                            <ArrowRight className="text-white bg-[#001E62] rounded-full p-1 w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
