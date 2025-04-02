'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
export default function Header() {
    const pathname = usePathname()
    return (
        <div className='flex items-center max-w-[1200px] mx-auto px-10 py-5  justify-between'>
            <div>
                <Image src={'/logo.png'} width={105} height={28} alt="logo of mkoia" />
            </div>
            <div className="flex lg:hidden cursor-pointer flex-col items-center gap-1">
                <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
                <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
                <div className="bg-[#222222] w-[21px] h-[3px] rounded"></div>
            </div>
            <div className='hidden lg:block' >
                <ul className='flex items-center gap-10'>
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'About', path: '/about' },
                        { name: 'Services', path: '/services' },
                        { name: 'Products', path: '/products' },
                    ].map((item) => (
                        <li className={`text-[20px] ${pathname === item.path ? "text-[#001E62]" : "text-[#556996]"
                            }`} key={item.path}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                    <li className="bg-[#001E62] flex items-center justify-between text-white px-4 py-2 rounded-full w-full">
                        <Link href="/contact" className="flex text-[20px]  items-center gap-3 w-full">
                            <span>Contact</span>
                            <div className="bg-white text-[#001E62] w-8 h-8 flex items-center justify-center rounded-full">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>


        </div>
    )
}


