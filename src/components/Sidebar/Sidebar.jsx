import React, { useRef, useState } from 'react'
import { LuInstagram } from "react-icons/lu";
import { MdHomeFilled, MdOutlineAddBox } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegCompass, FaRegHeart, FaRegUserCircle, FaRegComment } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { toast } from 'react-toastify';
import postApi from '../../utils/postApi';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  //   const messageCount = 3; // number to show on red badge

  const [messageCount, setMessageCount] = useState(3)

  const inputFileRef = useRef()


  const [token] = useState(() => localStorage.getItem("token"))

  const navigate = useNavigate()


  async function handleFileInput(e) {
    // console.log(e.target.files[0],"selected file")
    const file = e.target.files[0]

    if (!file) {
      toast.warn('File not selected', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const url = await
      uploadFileToCloudinary(file)

    const successfullyCreatedPost = await createPost("Du Du Du Max verstappen!!!!", url)

    if (successfullyCreatedPost) {
      toast('Post Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      await getAllPosts()
    }


    // console.log(uploadFile,"uploading file api call post");    
  }

  //THIS RETURNS A URL
  async function uploadFileToCloudinary(file) {
    try {
      const formData = new FormData()

      formData.append("file", file)
      // console.log(formData)

      const uploadFile = await postApi.post("/upload", formData)
      const url = uploadFile.data.data.file_url

      if (url) {
        return url
      } else {
        throw new Error("Url not found")
      }
    } catch (error) {
      console.log("error", error)
    }
  }


  async function createPost(text, url) {

    if (!text || !url) {
      alert("caption and image is required")
      return
    }

    const createPostRes = await postApi.post("/create", { text, image: url })

    console.log(createPostRes, 'create post response')
  }

  return (
    <div className="fixed left-0 h-screen w-[5vw] top-0 bottom-0 p-2 flex flex-col justify-center items-center text-white">
      <LuInstagram size={30} className="mb-15 cursor-pointer"
        onClick={() => {
          if (token) navigate("/")
        }}
      />

      <div className="flex flex-col justify-center items-center gap-8 relative">
        <button className="cursor-pointer"
          onClick={() => {
            if (token) navigate("/")
          }}
        >
          <MdHomeFilled size={30} />
        </button>
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


        {/* input type file for adding post */}

        <input type="file"
          id="file"
          className='hidden'
          ref={inputFileRef}
          onChange={handleFileInput}
        />
        <button
          onClick={() => {
            inputFileRef.current.click()

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
