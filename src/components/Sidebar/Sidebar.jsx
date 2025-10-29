import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa";

import { FaRegComment } from "react-icons/fa";

import { MdOutlineAddBox } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { toast } from 'react-toastify';
function Sidebar() {
    return (
        <div className='absolute left-0 h-screen w-[5vw] top-0 bottom-0 p-2 flex flex-col justify-center items-center'>
            <LuInstagram size={30} className='mb-15 cursor-pointer' />
            <div className=" flex flex-col justify-center items-center gap-8">
                <MdHomeFilled size={30} className='cursor-pointer' />
                <IoSearch size={30} className='cursor-pointer' />
                <FaRegCompass size={30} className='cursor-pointer' />
                <LuInstagram size={30} className='cursor-pointer' />
                <FaRegComment size={30} className='cursor-pointer' />
                <FaRegHeart size={30} className='cursor-pointer' />



                {/* MODAL POP FOR ADDING POST */}
                <button onClick={() => {
                    toast.success('Post Created', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        // transition: Bounce,
                    });
                    console.log("Add Post")
                }}>
                    <MdOutlineAddBox size={30} className='cursor-pointer' />
                </button>



                <FaRegUserCircle size={30} className='cursor-pointer' />
            </div>
            <div className="mt-17 flex flex-col justify-center items-center gap-5">
                <GiHamburgerMenu size={30} className='cursor-pointer' />
                <CgMoreO size={30} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Sidebar