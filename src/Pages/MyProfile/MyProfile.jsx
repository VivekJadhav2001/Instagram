import React from 'react'
import { IoIosSettings } from "react-icons/io";
import Sidebar from '../../components/Sidebar/Sidebar';


function MyProfile() {
    return (
        <div className=' relative min-h-screen w-screen bg-black text-white flex justify-center items-center'>
            {/* SIDEBAR */}

            <Sidebar/>
            <div className="w-[80%] border-2 border-gray-700 p-24">
                <div className="flex justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOU8WsvZZ1j5eHAdUl5EJC1we9Hbux49IA&s" alt="" className='w-48 h-48 object-cover rounded-full' />
                    <div className="m-6 flex flex-col gap-3 justify-start items-start">
                        <div className="flex gap-4 justify-center items-center">
                            <h1 className='text-4xl font-bold text-center/'>Vivek.jadhav@gmaol.com</h1>
                            <IoIosSettings size={30} />
                        </div>
                        <h2 className='text-lg'>Vivek Jadhav</h2>

                        <div className="post-follower-count flex justify-center items-center gap-12">
                            <p><span className='mx-1'>{0}</span>Posts</p>
                            <p><span className='mx-1'>{100}</span>Followers</p>
                            <p><span className='mx-1'>{10}</span>Following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile