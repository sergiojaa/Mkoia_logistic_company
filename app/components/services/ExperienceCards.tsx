import React from 'react'
interface Experience {
    year: string
    title: string
}

export default function ExperienceCards({ year, title }: Experience) {
    return (
        <div className="p-6 md:p-8 flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-[#001E62] font-bold text-5xl   leading-tight">{year}</h2>
            <p className="text-[#556996] text-lg md:text-xl lg:text-2xl">{title}</p>
        </div>
    )
}
