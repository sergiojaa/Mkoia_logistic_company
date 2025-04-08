interface Experience {
    year: string
    text: string
}

export default function ExperienceCards({ year, text }: Experience) {
    return (
        <div>
            <div className="flex w-[350px] lg:w-[290px] justify-center h-[230px] mx-auto flex-col gap-5 items-center border border-[#CCD2DF] rounded-3xl bg-white shadow-sm">
                <h2 className="text-[45px] font-bold text-[#001E62]">{year}</h2>
                <p className="text-xl max-w-[200px] text-center text-[#556996]">{text}</p>
            </div>
        </div>
    )
}