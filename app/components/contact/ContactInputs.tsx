'use client'
import React, { useState } from 'react'

export default function ContactInputs() {
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    console.log(input)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await fetch('/api/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
    }

    return (
        <div className='mt-10 flex flex-col  items-center justify-center px-4 lg:px-10'>
            <div>
                <p className='text-[#2A437C] text-2xl  max-w-xl mb-8'>
                    გთხოვთ შეავსოთ ქვემოთ მოცემული ფორმა და
                    ჩვენი გუნდი დაგიკავშირდებათ
                    აუცილებლად
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl'>
                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>სახელი</label>
                        <input
                            id='name'
                            name='firstname'
                            placeholder='სახელი'
                            type="text"
                            onChange={handleChange}
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>გვარი</label>
                        <input
                            onChange={handleChange}

                            id='lastname'
                            name='lastName'
                            placeholder=' გვარი'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>ელ-ფოსტა</label>
                        <input
                            onChange={handleChange}

                            id='email'
                            name='email'
                            placeholder=' ელ-ფოსტა'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>ტელეფონის ნომერი</label>
                        <input
                            onChange={handleChange}

                            id='phone'
                            name='phone'
                            placeholder=' ტელეფონის ნომერი'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>
                    <div className='md:col-span-2 max-w-[570px]'>
                        <label className='block text-[#1E2A4A] font-medium mb-2'>შეტყობინება</label>
                        <textarea
                            onChange={handleChange}
                            value={input.message}
                            id="message"
                            name="message"
                            placeholder="შეიყვანეთ თქვენი შეტყობინება"
                            className="w-full border border-[#AAB4CB] focus:ring-[#3E64AA] text-left pl-3 pt-3 h-[150px]"
                        ></textarea>



                        <div className='flex items-center justify-center'>
                            <button type='submit' className='bg-[#001E62] mt-5 cursor-pointer py-2 rounded-full text-white w-[400px]'>გაგზავნა</button>

                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
