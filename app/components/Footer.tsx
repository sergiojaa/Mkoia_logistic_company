'use client'
import React from "react";
import { Facebook, } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslate } from "../utils/translate";
import Image from "next/image";
export default function Footer() {
    const t = useTranslate()

    return (
        <footer className="bg-[#0B1B4B] mt-20 text-white px-7 lg:px-20 py-12">
            <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row  justify-between gap-10">
                <div className="space-y-6">
                    <h1 className="text-4xl text-white">
                        M<span className="text-[#D13851]">K</span>O<span className="text-[#D13851]">I</span>A
                    </h1>

                    <p className="text-md max-w-[327px] text-gray-300">
                        {t('follow-us')}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4">
                        <a href="https://www.facebook.com/profile.php?id=61575527729244" target="_blank" aria-label="Facebook">
                            <Facebook className="w-10 " />
                        </a>
                        {/* <a href="#" aria-label="Instagram">
                            <Instagram />
                        </a> */}
                        <a href="https://wa.me/995574013708" aria-label="WhatsApp">
                            {/* <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-6" /> */}
                            <Image src={'/whatsap.png'} width={30} height={6} alt="whatsap icon" />
                        </a>

                    </div>
                </div>

                <div>
                    <h3 className="text-xl mb-3">{t('contact')}</h3>
                    <ul className="space-y-2 text-gray-300 text-md">
                        <li>
                            <a href="mailto:infoinfo@mkoia.ge" className="hover:text-[#D13851]">infoinfo@mkoia.ge
                            </a>
                        </li>
                        <li>
                            <a href="tel:+995574013708" className="hover:text-[#D13851]">+995 574 013 708</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl mb-3">{t('company')}</h3>
                    <ul className="space-y-2 text-gray-300 text-md">
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                        <Link href="/services">
                            <li>Services</li>
                        </Link>
                        <Link href="/products">
                            <li>Products</li>
                        </Link>
                        <Link href="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
