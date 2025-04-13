import React from 'react'

export default function ContactInputs() {
    return (
        <div className='mt-10 px-4 md:px-10'>
            <div>
                <p className='text-[#2A437C] text-2xl  max-w-xl mb-8'>
                    Please fill out the form below, and
                    our team will get back to you
                    promptly.
                </p>

                <form className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl'>
                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>First Name</label>
                        <input
                            name='firstname'
                            placeholder='Enter your first name'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>Last Name</label>
                        <input
                            name='lastName'
                            placeholder='Enter your last name'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>Email Address</label>
                        <input
                            name='email'
                            placeholder='Enter your email address'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>

                    <div>
                        <label className='block text-[#001E62] font-medium mb-2'>Phone Number</label>
                        <input
                            name='phone'
                            placeholder='Enter your phone number'
                            type="text"
                            className='w-full border border-[#AAB4CB] rounded-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3E64AA]'
                        />
                    </div>
                    <div className='md:col-span-2'>
                        <label className='block text-[#1E2A4A] font-medium mb-2'>Message</label>
                        <textarea
                            name='message'
                            placeholder='Enter your message'
                            className='w-[600px] border border-[#AAB4CB]  focus:ring-[#3E64AA] placeholder:pl-3 placeholder:pt-3  h-[150px]'
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}
