import React, { useState } from 'react'
import { LuInstagram } from "react-icons/lu";
import { MdHomeFilled, MdOutlineAddBox } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegCompass, FaRegHeart, FaRegUserCircle, FaRegComment } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { toast } from 'react-toastify';

function Sidebar() {
//   const messageCount = 3; // number to show on red badge

    const [messageCount, setMessageCount] = useState(3)

  return (
    <div className="fixed left-0 h-screen w-[5vw] top-0 bottom-0 p-2 flex flex-col justify-center items-center text-white">
      <LuInstagram size={30} className="mb-15 cursor-pointer" />

      <div className="flex flex-col justify-center items-center gap-8 relative">
        <MdHomeFilled size={30} className="cursor-pointer" />
        <IoSearch size={30} className="cursor-pointer" />
        <FaRegCompass size={30} className="cursor-pointer" />
        <LuInstagram size={30} className="cursor-pointer" />

        {/* Message Icon with red badge */}
        <div className="relative">
          <FaRegComment size={30} className="cursor-pointer" />
          {messageCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {messageCount}
            </span>
          )}
        </div>

        <FaRegHeart size={30} className="cursor-pointer" />

        {/* Modal pop for adding post */}
        <button
          onClick={() => {
            toast.success('Post Created', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            console.log("Add Post");
          }}
        >
          <MdOutlineAddBox size={30} className="cursor-pointer" />
        </button>

        <FaRegUserCircle size={30} className="cursor-pointer" />
      </div>

      <div className="mt-17 flex flex-col justify-center items-center gap-5">
        <GiHamburgerMenu size={30} className="cursor-pointer" />
        <CgMoreO size={30} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Sidebar;
