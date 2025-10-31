import React, { useEffect, useState } from 'react'
import { IoIosSettings } from "react-icons/io";
import Sidebar from '../../components/Sidebar/Sidebar';
import postApi from '../../utils/postApi';
import { IoClose } from 'react-icons/io5';
import { FaBookmark, FaHeart, FaPaperPlane, FaRegComment } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { toast } from 'react-toastify';


function MyProfile() {


    const [myPosts, setMyPosts] = useState([])
    const [dropDown, setDropDown] = useState(false)


    async function MyPosts() {
        try {
            const res = await postApi.get("/my-posts")

            // console.log(res.data.data,"Array of images of the user")
            setMyPosts(res.data.data || [])
        } catch (error) {
            console.log(error, "ERROR FROM MyPosts Function")
        }
    }

    // function to Delete post
    async function deletePost(postId) {
        console.log(postId)
        try {
            const res = await postApi.delete(`/delete/${postId}`);
            toast.success('Post deleted successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            console.log(res, "Response on click of delete")
            await getAllPosts()

        } catch (error) {
            console.log(error, "Error from deletePost function")
        }
    }

    //Function for cloudinary url
    

    //function to Update Post
    
    async function updatePost(postId, e) {
        const newCaption = prompt("Enter new caption:");
        if (!newCaption) return;

        // const file = e.target.files[0];
        // console.log(file)
        // const imageUrl = await uploadFileToCloudinary(file);


        try {

            const res = await postApi.put(`/update/${postId}`, { text: newCaption });

            toast.success('Post updated successfully', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });

            // Refresh posts after update
            await MyPosts();
            setDropDown(prev=>!prev)

        } catch (error) {
            console.error(error, "Error from updatePost function");
            toast.error('Failed to update post', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
    }


    useEffect(() => {
        MyPosts()
    }, [])




    return (
        <div className=' overflow-x-hidden relative min-h-screen w-screen bg-black text-white flex flex-col gap-10 justify-center items-center'>
            {/* SIDEBAR */}

            <Sidebar />

            <div className="w-[80%] border-2 border-gray-700 p-24">
                <div className="flex justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOU8WsvZZ1j5eHAdUl5EJC1we9Hbux49IA&s" alt="" className='w-48 h-48 object-cover rounded-full' />
                    <div className="m-6 flex flex-col gap-3 justify-start items-start">
                        <div className="flex gap-4 justify-center items-center">
                            <h1 className='text-4xl font-bold text-center/'>Vivek.jadhav@gmail.com</h1>
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


                {/* Edit and archive buttons */}
                <div className="buttons flex gap-9 justify-center items-center">
                    <button className='w-[22vw] h-9 cursor-pointer bg-gray-800 text-white rounded-lg text-center mt-4 mb-4'>
                        edit profile
                    </button>
                    <button className='w-[22vw] h-9 cursor-pointer bg-gray-800 text-white rounded-lg text-center mt-4 mb-4'>
                        view archive
                    </button>
                </div>



            </div>


            <div className="w-[80%] h-[60vh] border-t-gray-700 border-t-2 p-10">
                {myPosts.map((post) => (
                    <div key={post._id} className="p-3 border-b border-gray-800">
                        {/* Header */}
                        <div className="relative flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <div className="bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5 rounded-full">
                                    <img
                                        src="https://images.seeklogo.com/logo-png/40/1/red-bull-racing-f1-logo-png_seeklogo-406796.png"
                                        alt="profile"
                                        className="rounded-full w-10 h-10 border-2 border-black"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{post.user}</p>
                                    <p className="text-xs text-gray-400">Hyderabad</p>
                                </div>
                            </div>
                            {dropDown ?
                                <div className="absolute rounded-3xl z-40 right-1.5 top-1.5 h-[13vh] w-[10vw] bg-[#000000]">
                                    <IoClose size={20} className="w-full cursor-pointer" onClick={() => setDropDown(prev => !prev)} />
                                    <button className="w-full cursor-pointer hover:bg-gray-700 rounded-2xl"
                                        onClick={() => deletePost(post._id)}
                                    >
                                        <span className="text-red-500 w-full text-center font-semibold">Delete Post</span>
                                    </button>
                                    <button className="w-full cursor-pointer hover:bg-gray-700 rounded-2xl"
                                        onClick={(e) => updatePost(post._id, e)}
                                    >
                                        <span className="text-red-500 w-full text-center font-semibold">Update Post</span>
                                    </button>
                                </div>
                                : <FiMoreHorizontal className="cursor-pointer" size={20} onClick={() => setDropDown(prev => !prev)} />
                            }

                        </div>

                        {/* Image */}
                        <div className="relative w-full h-80 overflow-hidden rounded-lg">
                            <img
                                src={post.image}
                                alt="post"
                                className="object-contain w-full h-full"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center py-2">
                            <div className="flex gap-4">
                                <FaHeart size={22} />
                                <FaRegComment size={22} />
                                <FaPaperPlane size={22} />
                            </div>
                            <FaBookmark size={22} />
                        </div>

                        {/* Likes & Caption */}
                        <p className="font-semibold">{post.likes.length} likes</p>
                        <p>
                            <span className="font-semibold">{post.user.slice(0, 6)}</span> {post.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyProfile