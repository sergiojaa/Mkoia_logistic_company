"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="max-w-[1200px] mx-auto px-10 py-5 flex justify-between items-center relative">
            <div>
                <Image src={"/logo.png"} width={105} height={28} alt="logo of mkoia" />
            </div>

            <div
                className="lg:hidden cursor-pointer flex flex-col items-center gap-1"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <X className="text-[#222222] w-6 h-6" />
                ) : (
                    <>
                        <div className="bg-[#222222] w-[21px] h-[3px] rounded transition-all duration-300"></div>
                        <div className="bg-[#222222] w-[21px] h-[3px] rounded transition-all duration-300"></div>
                        <div className="bg-[#222222] w-[21px] h-[3px] rounded transition-all duration-300"></div>
                    </>
                )}
            </div>

            <div className="hidden lg:block">
                <ul className="flex items-center gap-10">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Services", path: "/services" },
                        { name: "Products", path: "/products" },
                    ].map((item) => (
                        <li
                            className={`text-[18px] ${pathname === item.path ? "text-[#001E62]" : "text-[#556996]"
                                }`}
                            key={item.path}
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}

                    <li className="bg-[#001E62] flex items-center text-white px-4 py-2 rounded-full">
                        <Link href="/contact" className="flex text-[16px] items-center gap-3">
                            <span>Contact</span>
                            <div className="bg-white text-[#001E62] w-8 h-8 flex items-center justify-center rounded-full">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div
                className={`absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-5 p-5 shadow-lg lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                    }`}
            >
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Services", path: "/services" },
                    { name: "Products", path: "/products" },
                ].map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`text-[20px] ${pathname === item.path ? "text-[#001E62]" : "text-[#556996]"
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
                    <span >Contact</span>
                    <div className="bg-white text-[#001E62] w-6 h-6 flex items-center justify-center rounded-full">
                        <ArrowRight size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
