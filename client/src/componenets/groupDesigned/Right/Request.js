import React, { useState } from 'react';
import Share_Project2 from './Share_Project2';

function Request() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                <div className='p-2 font-semibold text-lg uppercase'>Connections</div>
                <div className='bg-white p-3 my-1 rounded-lg flex justify-between'>
                    <div className='flex gap-3 py-2'>
                        <img
                            className="object-cover rounded-full w-10 h-10"
                            src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                            alt=""
                        />
                        <img
                            className="object-cover rounded-full w-10 h-10"
                            src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                            alt=""
                        />
                        <img
                            className="object-cover rounded-full w-10 h-10"
                            src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                            alt=""
                        />
                    </div>
                    <div>
                        <button onClick={() => setOpen(!open)} className="text-white bg-blue-400 px-4 rounded-xl font-bold h-8 ml-2 mt-3">
                            + Invite
                        </button>
                    </div>

                </div>
            </div>
            <div className={(open ? "block" : "hidden") + ' absolute w-[48%] h-full  z-[4] top-0 -ml-[49%] mt-20 mb-2'}>
                <Share_Project2 />
            </div>
        </div>
    )
}

export default Request
