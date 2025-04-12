import React from 'react'
import Servicesimage from '../components/services/Servicesimage'
import Community from '../components/services/Community'
import Service from '../components/services/Service'
import Process from '../components/services/Process'

export default function page() {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Servicesimage />
            <Community />
            <Service />
            <Process />
        </div>
    )
}
