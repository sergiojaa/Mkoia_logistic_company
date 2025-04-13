import { LucideIcon } from 'lucide-react';
import React from 'react'
interface ContactCard {
    Icon: LucideIcon;
    title: string;
    description: string;
}
export default function ContactCards({ Icon, title, description }: ContactCard) {
    return (
        <div className="rounded-3xl max-w-[500px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCD2DF]">
                    <Icon className="h-5 w-5 text-[#001E62]" />
                </div>
                <div className="text-lg font-medium  text-[#556996]">{title}</div>
            </div>
            <div>
                <p className="text-xl  text-[#001E62]">{description}</p>
            </div>
        </div>
    )
}
