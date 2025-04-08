import React from 'react'
import Head from '../components/about/Head'
import Whoarewe from '../components/about/Whoarewe'
import Experience from '../components/about/Experience'
import Action from '../components/about/Action'

export default function page() {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Head />
            <Whoarewe />
            <Experience />
            <Action />
        </div>
    )
}
