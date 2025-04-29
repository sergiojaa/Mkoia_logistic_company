'use client'
import { useTranslate } from '@/app/utils/translate'
import React, { useState } from 'react'

export default function ContactInputs() {
    const t = useTranslate()
    const [success, setSuccess] = useState(false);

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
        console.log(response)
        // if (response.ok) {
        setSuccess(true);

        setInput({
            name: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });

        setTimeout(() => {
            setSuccess(false);
        }, 3000);
        // }

    }

    return (
        <div className='mt-10 flex flex-col  items-center justify-center px-4 lg:px-10'>
            <div>
                <p className='text-[#2A437C] text-xl  max-w-xl mb-8'>
                    {t('please-fill')}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl'>
                    <div>
                        <label className='block text-[#001E62]  mb-2'>{t('name')}</label>
                        <input
                            id='name'
                            name='name'
                            value={input.name}
                            placeholder={t('name')}
                            type="text"
                            onChange={handleChange}
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62]  mb-2'>{t('last-name')}</label>
                        <input
                            onChange={handleChange}

                            id='lastname'
                            value={input.lastName}
                            name='lastName'
                            placeholder={t('last-name')}
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62]  mb-2'>{t('email')}</label>
                        <input
                            onChange={handleChange}

                            id='email'
                            name='email'
                            value={input.email}
                            placeholder={t('email')}
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62]  mb-2'>{t('phone-number')}</label>
                        <input
                            onChange={handleChange}

                            id='phone'
                            value={input.phone}
                            name='phone'
                            placeholder={t('phone-number')}
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>
                    <div className='md:col-span-2 max-w-[570px]'>
                        <label className='block text-[#1E2A4A]  mb-2'>{t('message')}</label>
                        <textarea
                            onChange={handleChange}
                            value={input.message}
                            id="message"

                            name="message"
                            placeholder={t('enter-message')}
                            className="w-full border border-[#AAB4CB] focus:ring-[#3E64AA] text-left pl-3 pt-3 h-[150px]"
                        ></textarea>



                        <div className='flex items-center justify-center'>
                            <button type='submit' className='bg-[#001E62] mt-5 cursor-pointer py-2 rounded-full text-white w-[400px]'>{t('send')}</button>

                        </div>
                        {success && <p className="text-green-600 mt-4">{t('message-sent')}</p>}

                    </div>

                </form>
            </div>
        </div>
    )
}
