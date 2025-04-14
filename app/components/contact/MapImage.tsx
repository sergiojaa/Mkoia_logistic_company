import React from 'react'

export default function MapImage() {
    return (
        <div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190417.3572826923!2d44.617697061999415!3d41.77936843825734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473004520e219%3A0x12a16a9ac1bbbcc6!2zTHRkIE1rb2lhIOGDqOGDnuGDoSDhg5Thg5vhg5nhg53hg5jhg5A!5e0!3m2!1ska!2sge!4v1744639175604!5m2!1ska!2sge" width="600" height="450" loading="lazy" ></iframe>
            </div>
            <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-2"></div>
                <p className=" text-[#2A437C]">FIND US</p>
            </div>
            <div>
                <p>Conveniently Located for Easy Access to All Major Logistics Routes</p>

            </div>
            <div className=''>
                <button className='bg-[#001E62] mt-5 cursor-pointer py-2 rounded-full text-white w-[250px]'>Contact Us</button>
            </div>
        </div>
    )
}
