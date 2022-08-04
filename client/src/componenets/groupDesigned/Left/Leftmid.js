import React from 'react'

function Leftmid() {
    return (
        <div>
            <div className="bg-white p-6 pb-2 rounded-lg mt-2 ">
                {/* <h2 className="font-bold mb-5">Follower Request</h2> */}

                <div className="flex gap-2">
                    <img
                        className="object-cover rounded-full w-10 h-10"
                        src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                        alt=""
                    />
                    <div className='w-36'>
                        <div className='text-lg'>Post Pending</div>
                        <p className='text-slate-500 text-sm'>10 post</p>
                    </div>
                    <button className="text-black bg-[#eff1f7] px-3 rounded-full font-bold w-1/3 h-8 ml-2 mt-2"> {/**onClick={() => pagedown(!pageup)}  */}
                        Approve
                    </button>
                </div>
                <div className="flex gap-2">
                    <img
                        className="object-cover rounded-full w-10 h-10"
                        src
                        ="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
                        alt=""
                    />
                    <div className=' w-36'>
                        <div className='text-lg'>Members</div>
                        <p className='text-slate-500 text-sm'>122</p>
                    </div>
                    <button className="text-black bg-[#eff1f7] px-3 rounded-full font-bold w-1/3 h-8 ml-2 mt-2">
                        View list
                    </button>
                </div>

                <h5 className="text-blue-400 font-semibold">Show More</h5>
            </div>
        </div>
    )
}

export default Leftmid
