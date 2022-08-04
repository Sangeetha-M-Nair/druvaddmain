import React, { useState } from 'react'
// import Desktop from './Desktop';
import Filters from './Filters';
import Mobile from './Mobile';
import Newnav from './Navbar/Newnav'
import Newdesktop from './Newdesktop';
// import Newmobile from './Newmobile';
// import Links from './Links'
// import Navbar from './Navbar/Navbar'

function Blue() {
   
    return (
        <div className='relative bg-[#e6e4f3]'>
            {/* navbar */}
            <div className='bg-white top-0 h-24 mx-auto w-full fixed  z-[10] '> {/**border-b-2 border-[#623cea] */}

                <Newnav />

            </div>
            {/* Navbar end */}
            <div className='flex relative w-full'>
                <div className="hidden lg:block w-[80%]  ">
                    <Newdesktop />
                    
                    
                </div>
                <div className='fixed right-0 z-[5] hidden lg:block w-[20%]'>
                <Filters />
                </div>
                <div className='lg:hidden'>
                    <Mobile />
                    
                </div>
                {/* end full data */}
                {/* right section */}
                

            </div>
        </div>
    )
}

export default Blue
