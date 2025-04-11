import React from 'react'
interface Experience {
    year: string
    title: string
}

export default function ExperienceCards({ year, title }: Experience) {
    return (
        <div className="w-[300px] lg:w-[250px] lg:items-center p-8 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white">
            <h2 className="text-[#001E62] font-bold text-[70px] leading-tight">{year}</h2>
            <p className="text-[#556996] text-2xl">{title}</p>
        </div>
    )
}
