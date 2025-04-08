import React from 'react'
import Image from 'next/image'
export default function History() {
    return (
        <div className='p-5'>
            <div className='relative'>
                <Image
                    className=' hidden lg:block  rounded-4xl'
                    src='/about/History-desktop.png' width={1200} height={200} alt='image' />
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
