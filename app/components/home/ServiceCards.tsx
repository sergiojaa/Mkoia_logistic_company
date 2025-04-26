import Image from "next/image"

interface ServiceCard {
    icon: string
    title: string
    description: string
}

export default function ServiceCards({ icon, title, description }: ServiceCard) {
    return (
        <div className=" py-2 md:py-4">
            <div className="border border-[#CCD2DF] rounded-xl p-5 sm:p-6 md:p-8 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                    <Image
                        className="object-cover"
                        src={icon || "/placeholder.svg"}
                        alt={`${title} icon`}
                        width={48}
                        height={48}
                    />
                </div>
                <div className="flex flex-col max-w-[900px] lg:flex-row lg:items-center w-full justify-between gap-3 lg:gap-6">
                    <h3 className="text-[#001E62] text-md lg:text-lg  max-w-[350px]">{title}</h3>
                    <p className="text-[#556996] text-base max-w-[500px]">{description}</p>
                </div>
            </div>
        </div>
    )
}

