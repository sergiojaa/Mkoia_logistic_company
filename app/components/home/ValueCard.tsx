import React from 'react';
import { Shield, Lightbulb, Users, Leaf } from 'lucide-react';

interface ValueCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
}

export default function App() {
    const values: ValueCardProps[] = [
        {
            title: "ჩვენ უზრუნველვყოფთ, რომ თითოეული მიწოდება აკმაყოფილებს ჩვენს მაღალ სტანდარტებს",
            description: "დასაწყისიდან დასასრულამდე",
            icon: <Shield className="w-6 h-6 text-blue-900" />,
            tag: "სანდოობა"
        },
        {
            title: "ხალი, თანამედროვე ტექნოლოგიების დაუფლება და ინტეგრაცია",
            description: "შეუფერხებელი ლოჯისტიკის გამოცდილებისთვის.",
            icon: <Lightbulb className="w-6 h-6 text-blue-900" />,
            tag: "ინოვაცია"
        },
        {
            title: "თქვენი მოთხოვნები პრიორიტეტია",
            description: "გზის ყველა ეტაპზე ჩვენს გვერდით",
            icon: <Users className="w-6 h-6 text-blue-900" />,
            tag: "მომხმარებელზე ფოკუსირება"
        },
        {
            title: "მკაცრი გარემოსდაცვითი პრაქტიკების დაცვა.",
            description: "ჩვენი სერვისის ყველა ასპეკტში",
            icon: <Leaf className="w-6 h-6 text-blue-900" />,
            tag: "მდგრადობა"
        }
    ];

    return (
        <div className=" max-w-[1200px] mx-auto py-16 px-7">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
                            ძირითადი ღირებულებები
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">
                        <span>დაფუძნებული </span>
                        <span className="text-red-600">ნდობაზე</span>
                        <span> და </span>
                    </h1>
                    <h2 className="text-4xl font-bold text-red-600">ხარისხზე</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl">
                        ხელს ვუწყობთ სწორი ბიზნეს ურთიერთობის ჩამოყალიბებას, ჩვენი  ღირებულბების დაცვით, კეთილსინდისიერება, პასუხისმგებლობა და ხარისხი
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="relative p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-50">
                                        {value.icon}
                                    </div>
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-900">
                                        {value.tag}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}