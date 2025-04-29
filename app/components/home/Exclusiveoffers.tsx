'use client'
import React, { useState } from 'react'

const consultation = [
    { offer: "საკონსულტაციო მომსახურებას, რომელიც ითვალისწინებს პროექტებისა და შესაბამისი ხარჯთაღრიცხვების კვლევასა და ოპტიმალური შეთავაზების მომზადება." },
    { offer: "სატენდერო დოკუმენტაციის დამუშავებას და მიღებული წინადადებების პროფესიონალრ შეფასება-მოლაპარაკებას." },
    { offer: "სამშენებლო პროექტების სამუშაო და ფინანსერი გრაფიკების შედგენას და პროცესის ეფექტურ მართვას." },
    { offer: "მშენებლობის პროცესში ხარისხის კონტროლს და შრომის უსაფრთხოების წესების დაცვის უზრუნველყოფას." },
    { offer: "მასალების და მანქანა მექანიზმების მოძიებასა და ობიექტზე დაუყოვნებლივ და დროულ მიწოდებას, დამატებითი ხარჯების თავიდან ასაცილებლად." },
    { offer: "მასალათა ფართო არჩევას და დამკმეთისთვის ოპტიმალური შეთავაზების მომზადებას." },
    { offer: "დაუყოვნებლივ სატრანსპორტო მომსახურებასა და სასაწყობე ფართების მოძიებას." },
    { offer: "სამშენებლო მოედანზე, მასალათა და სამუშაოთა ხარისხის ვიზუალიზაციას დამკვეთის მიერ შერჩეული მასალებითა და ტექნოლოგიებით (MocUp)." },
    { offer: "მასალებისა და სამუშაოთა დოკუმენტაციის მართვასა და რეკომენდაციების მომზადებას." }
]

export default function Exclusiveoffers() {
    const [offers] = useState(consultation)

    return (
        <section className="w-full py-12 bg-slate-50">
            <div className="max-w-[1200px] px-7 mx-auto">
                <div className="flex flex-col items-center lg:items-start lg:text-start text-center mb-10">
                    {/* <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">შეზღუდული დროით</div> */}
                    <h2 className="font-bold tracking-tight text-xl lg:text-3xl text-[#2A437C]">
                        <span className="text-[#C8102E]">ექსკლუზიური </span>შეთავაზებები
                    </h2>
                    <p className="max-w-[700px] text-[#2A437C] md:text-xl mt-4">
                        კომპანია „ემკოია“ გთავაზობთ პროექტების შეფასებისა, ეფექტური მართვის და საკონსულტაციო მომსახურებას, დაფუძნებულს ადგილობრივი და პარტნიორი ქვეყნების ბაზრის კვლევასა და მრავალწლიან გამოცდილებაზე.
                    </p>
                </div>

                <h3 className="text-xl text-[#2A437C] font-semibold mb-6 lg:text-start text-center">კერძოდ, კომპანია სთავაზობს დამკვეთს შემდეგ მომსახურებებს:</h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-[#2A437C]">{offer.offer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-[#2A437C] space-y-4 text-center ">
                    <h4 className="text-lg font-medium">
                        კომპანიის წარმატება ეფუძნება თანამშრომელთა მრავალწლიან გამოცდილებას, როგორც ადგილობრივ მცირე, ასევე საერთაშორისო დიდ პროექტებში.
                        კომპანია ორიენტირებულია დამკვეთისთვის სასურველი სერვისის მიწოდებასა და მომავალ პროექტებში ჩართულობაზე.
                    </h4>
                    <p className="font-medium">
                        გისურვებთ წარმატებას და ფინანსურ სიძლიერეს,
                    </p>
                    <p className="text-[#2A437C]">
                        პატივისცემით

                    </p>
                </div>
            </div>
        </section>
    )
}
