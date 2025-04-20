import React from "react";
import { Facebook, Instagram, } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="bg-[#0B1B4B] mt-20 text-white px-6 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                {/* Left - Logo & Text */}
                <div className="lg:w-1/3 space-y-6">
                    <h1 className="text-4xl text-white">M<span className="text-[#D13851]">K</span>O<span className="text-[#D13851]">I</span>A</h1>

                    <p className="text-md text-gray-300">
                        გამოგვყევი სოციალურ პლატმორმებზე რათა მიიღო ინფორმაცია პირველმა
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4">
                        <a href="#" aria-label="Facebook">
                            <Facebook />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} className="  w-7 h-6" />
                        </a>
                    </div>
                </div>

                {/* Middle - Headline */}
                <div className="lg:w-1/3 flex items-start lg:items-center">
                    <h2 className="text-xl font-semibold leading-snug">
                        თქვენი მიზნების ასრულება<br />იწყება აქ
                    </h2>
                </div>

                {/* Right - Company Links */}
                <div className="lg:w-1/3">
                    <h3 className="text-xl  mb-3">კომპანია</h3>
                    <ul className="space-y-2 text-gray-300 text-md">
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                        <Link href={'/services'}>
                            <li>Services</li>

                        </Link>
                        <Link href={'/products'}>
                            <li>Products</li>

                        </Link>

                        <Link href={'/contact'}>
                            <li>Contact</li>

                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
