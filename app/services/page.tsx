import React from 'react'
import Servicesimage from '../components/services/Servicesimage'
import Community from '../components/services/Community'

export default function page() {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Servicesimage />
            <Community />
        </div>
    )
}
