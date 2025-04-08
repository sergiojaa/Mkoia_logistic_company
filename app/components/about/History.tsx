import React from 'react'
import Image from 'next/image'
export default function History() {
    return (
        <div className='p-5 hidden lg:block w-full mx-auto'>
            <div className='relative '>
                <Image
                    className=' hidden lg:block  rounded-4xl'
                    src='/about/History-desktop.png' width={1200} height={200} alt='image' />
                <div className='flex items-center left-110 absolute top-10'>
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <p className='text-white text-xl '>Our History Since Inception</p>
                </div>

                <div className='  text-white'>
                    <p className='absolute top-30 left-38' >1999</p>
                    <p className='absolute text-sm text-center text-[#CCD2DF] max-w-[220px] left-20 bottom-30'>Logix was founded with a vision to provide efficient regional logistics solutions</p>
                </div>
                <div className='  text-white'>
                    <p className='absolute top-30 left-114' >1999</p>
                    <p className='absolute text-sm text-center text-[#CCD2DF] max-w-[185px] left-95 bottom-30'>Logix was founded with a vision to provide efficient regional logistics solutions</p>
                </div>
                <div className='  text-white'>
                    <p className='absolute top-30 right-116' >1999</p>
                    <p className='absolute text-sm text-center  text-[#CCD2DF] max-w-[190px] right-95 bottom-30'>Logix was founded with a vision to provide efficient regional logistics solutions</p>
                </div>
                <div className='  text-white'>
                    <p className='absolute top-30 right-66' >1999</p>
                    <p className='absolute text-sm text-center text-[#CCD2DF] max-w-[180px] right-45 bottom-30'>Logix was founded with a vision to provide efficient regional logistics solutions</p>
                </div>
                <div className='  text-white'>
                    <p className='absolute top-30 left-38' >1999</p>
                    <p className='absolute text-sm text-center text-[#CCD2DF] max-w-[220px] left-20 bottom-30'>Logix was founded with a vision to provide efficient regional logistics solutions</p>
                </div>
            </div>
        </div>
    )
}




{/* <div className='relative'>
                    <Image
                        className='md:hidden rounded-4xl'
                        src='/about/History-mobile.png' width={1200} height={200} alt='image' /> */}
{/* <div className='absolute top-35 left-20'>
                        <p className='text-white'>2005</p>
                        <p className='text-[#CCD2DF]'> Expanded services to include international freight and cross-border solutions.</p>
                    </div> */}
{/* </div> */ }
