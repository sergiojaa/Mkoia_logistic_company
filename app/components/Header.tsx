"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useTranslate } from "../utils/translate";

export default function Header() {
    const t = useTranslate()

    const pathname = usePathname();
    const { toggleLanguage, language } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log(language)
    const handleLanguageChange = (lang: "ge" | "en") => {
        if (lang !== language) {
            toggleLanguage();
        }
        setIsOpen(false);
    };



    return (
        <header className="relative z-[100] bg-white">
            <div className="max-w-[1200px] mx-auto px-7 py-5 flex justify-between items-center relative">
                <div className="z-10">
                    <Link href={'/'}>
                        <h1 className="text-4xl text-[#001E62]">M<span className="text-[#D13851]">K</span>O<span className="text-[#D13851]">I</span>A</h1>
                    </Link>
                </div>

                <div
                    className="lg:hidden cursor-pointer flex flex-col items-center gap-1 z-[200] relative"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X className="text-[#222222] w-6 h-6" />
                    ) : (
                        <>
                            <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
                            <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
                            <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
                        </>
                    )}
                </div>

                <div className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {[
                            { name: t('home'), path: "/" },
                            { name: t('about'), path: "/about" },
                            { name: t('services-header'), path: "/services" },
                            { name: t('products'), path: "/products" },
                        ].map((item) => (
                            <li
                                key={item.path}
                                className={`text-[18px] ${pathname === item.path
                                    ? "text-[#001E62]"
                                    : "text-[#556996]"
                                    }`}
                            >
                                <Link href={item.path}>{item.name}</Link>
                            </li>
                        ))}

                        <div className="relative w-[80px]">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex cursor-pointer items-center gap-2 text-xl text-[#001E62]"
                            >
                                {language === "ge" ? "🇬🇪 Geo" : "🇬🇧 En"}
                            </button>

                            {isOpen && (
                                <div className="absolute mt-1 bg-[#001E62] rounded-lg shadow-lg w-32">
                                    <button
                                        onClick={() => handleLanguageChange("ge")}
                                        className="w-full cursor-pointer text-white flex items-center gap-2 px-4 py-3 hover:bg-white/10"
                                    >
                                        <span className="text-xl">🇬🇪</span> Geo
                                    </button>

                                    <button
                                        onClick={() => handleLanguageChange("en")}
                                        className="w-full cursor-pointer text-white flex items-center gap-2 px-4 py-3 hover:bg-white/10"
                                    >
                                        <span className="text-xl">🇬🇧</span> En
                                    </button>


                                </div>
                            )}
                        </div>

                        <li className="bg-[#001E62] flex items-center text-white px-4 py-2 rounded-full">
                            <Link href="/contact" className="flex text-[16px] items-center gap-3">
                                <span>
                                    {t('contact-header')}
                                </span>
                                <div className="bg-white text-[#001E62] w-8 h-8 flex items-center justify-center rounded-full">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 w-full bg-white z-[150] flex flex-col items-center gap-5 p-5 pt-24 shadow-lg lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                    }`}
            >
                <div className="relative w-[80px]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer items-center gap-2 text-xl text-[#001E62]"
                    >
                        {language === "ge" ? "🇬🇪 Geo" : "🇬🇧 En"}
                    </button>

                    {isOpen && (
                        <div className="absolute mt-1 bg-[#001E62] rounded-lg shadow-lg w-32">
                            <button
                                onClick={() => handleLanguageChange("ge")}
                                className="w-full cursor-pointer text-white flex items-center gap-2 px-4 py-3 hover:bg-white/10"
                            >
                                <span className="text-xl">🇬🇪</span> Geo
                            </button>

                            <button
                                onClick={() => handleLanguageChange("en")}
                                className="w-full cursor-pointer text-white flex items-center gap-2 px-4 py-3 hover:bg-white/10"
                            >
                                <span className="text-xl">🇬🇧</span> En
                            </button>

                        </div>
                    )}</div>

                {[
                    { name: t('home'), path: "/" },
                    { name: t('about'), path: "/about" },
                    { name: t('services-header'), path: "/services" },
                    { name: t('products'), path: "/products" },
                ].map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`text-[20px] ${pathname === item.path
                            ? "text-[#001E62]"
                            : "text-[#556996]"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}


                <Link
                    href="/contact"
                    className="bg-[#001E62] text-white px-4 py-2 rounded-full flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    <span>
                        {t('contact-header')}
                    </span>
                    <div className="bg-white text-[#001E62] w-6 h-6 flex items-center justify-center rounded-full">
                        <ArrowRight size={20} />
                    </div>
                </Link>
            </div>
        </header>
    );
}
