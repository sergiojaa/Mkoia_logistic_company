import { Circle } from "lucide-react"
import Image from "next/image"
export default function History() {
    const milestones = [
        {
            year: "2022",
            description: "დავწყეთ მაღალი ხარისხის სამშენებლო და სარემონტო მასალების ლოჯისტიკა.",
        },
        {
            year: "2023",
            description: "განვვითარდით, დაგვემატა მოძრავი ქონება და გაიზარდა კომპანია   ",
        },
        {
            year: "2024",
            description: "ვეცადეთ გაგვეწია კონკურენცია გიგანტი კომპანიებისთვის,რასაც თავი წარმატებით გავართვით",
        },
        {
            year: "2025",
            description: "დავაწესეთ ახალი სტანდარტი ლოჯისტიკურ კომპანიებში ჩვენი მაღალი ხარისხის მაჩვენებლით",
        },
    ]

    return (
        <div className="text-white mx-4 p-6 mt-10 rounded-lg max-w-full  relative">
            {/* Container for the background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    className="rounded-4xl"
                    src='/about/improve-desktop.png' layout="fill" objectFit="cover" alt="history of mkoia" />
            </div>

            {/* All the content, positioned on top of the image */}
            <div className="relative z-10">
                <div className="border border-dashed p-4 mb-6 rounded-md text-center lg:border-0 lg:p-0">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <p className="text-sm font-medium tracking-wider">მნიშვნელოვანი ეტაპები</p>
                    </div>
                    <h2 className="text-2xl font-bold">ჩვენი ისტორია</h2>
                </div>

                {/* Milestones for smaller screens */}
                <div className="relative pl-8 lg:hidden">
                    <div
                        className="absolute left-3 top-2 bottom-2 w-0.5 border-l-2 border-dashed "
                    ></div>

                    {milestones.map((milestone, index) => (
                        <div key={index} className={`mb-10 relative ${index === milestones.length - 1 ? "mb-0" : ""}`}>
                            <div className="absolute -left-8 top-0 flex items-center justify-center">
                                <Circle className="h-6 w-6 text-white fill-white stroke-blue-800" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                            <p className="text-sm text-blue-100">{milestone.description}</p>
                        </div>
                    ))}
                </div>

                {/* Milestones for larger screens */}
                <div className="hidden lg:block mt-12">
                    <div className="relative pt-8">
                        <div className="flex justify-between absolute top-0 left-0 right-0">
                            {milestones.map((milestone, index) => (
                                <div key={`year-${index}`} className="text-center w-1/4">
                                    <h3 className="text-xl font-bold">{milestone.year}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="absolute left-0 right-0 top-16 h-0.5 bg-white"></div>

                        <div className="absolute left-[12.5%] right-[12.5%] top-16 h-0.5 border-t-2 border-dashed "></div>

                        <div className="flex justify-between pt-20">
                            {milestones.map((milestone, index) => (
                                <div key={`content-${index}`} className="text-center w-1/4 px-2">
                                    <div className="relative">
                                        <Circle className="h-8 w-8 mx-auto -mt-12 mb-6 text-white fill-white  relative z-10" />
                                    </div>
                                    <p className="text-sm text-blue-100 mt-2">{milestone.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
