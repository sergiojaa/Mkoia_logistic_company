'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import json from './products.json'
interface ProductsType {
    image: string,
    title: string,
    description: string
}
export default function Products() {
    const [products, setProducts] = useState<ProductsType[]>(json)
    return (
        <div className="w-full px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((item, index) => (
                    <div key={index} className="overflow-hidden cursor-pointer border-[#001E62] rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                        <div className="relative px-5 pt-4">
                            <Image
                                src={item.image || "/placeholder.svg"}
                                width={300}
                                height={200}
                                alt={item.title}
                                className="mx-auto h-48 w-auto object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-semibold text-[#001E62]">{item.title}</h2>
                            <p className="text-sm text-[#D13851] line-clamp-3">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex w-full mt-10 items-center justify-center">
                <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
                    <div>
                        <h2 className="text-xl font-medium">პროდუქტები მალე დაემატება...</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
