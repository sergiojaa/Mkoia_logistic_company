import React from 'react'
import Head from '../components/about/Head'
import Whoarewe from '../components/about/Whoarewe'
import Experience from '../components/about/Experience'
import Action from '../components/about/Action'
import History from '../components/about/History'
import Cargo from '../components/about/Cargo'

export default function page() {
    return (
        <div className='max-w-[1200px] mt-7 mx-auto'>
            <Head />
            <Whoarewe />
            <Experience />
            <Action />
            <History />
            <Cargo />
        </div>
    )
}
