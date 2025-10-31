import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const navigate = useNavigate()

    function openMyProfile() {
        navigate("/myprofile")
    }
    return (

        <div className='fixed top-6 right-24 bg-black p-4 text-white flex justify-center items-center gap-17 rounded-2xl z-50'>
            <div className="flex justify-center items-center gap-1.5 cursor-pointer hover:bg-gray-900 rounded-2xl" onClick={openMyProfile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOU8WsvZZ1j5eHAdUl5EJC1we9Hbux49IA&s" alt="" className='w-16 h-16 object-cover rounded-full' />
                <div className="usernameANDemail flex flex-col">
                    <p className='email font-semibold text-lg'>Vivek.jadhav@gmail.com</p>
                    <p className='username font-semibold text-gray-600'>Vivek Jadhav</p>
                </div>
            </div>
            <p className='text-blue-900 font-semibold'>Switch</p>
        </div>
    )
}

export default Profile