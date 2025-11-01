import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaRegComment, FaPaperPlane, FaBookmark } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import postApi from "../../utils/postApi";
import { toast } from "react-toastify";
import commentApi from "../../utils/CommentApi";

function ContentPage() {
    const [allPosts, setAllPosts] = useState([]);
    const [dropDown, setDropDown] = useState(false)
    const [allComments, setAllComments] = useState([])

    console.log(allComments, "ALL COMMENTS")

    const commentRef = useRef()

    async function getAllPosts() {
        try {
            const res = await postApi.get("/all-posts");
            setAllPosts(res.data.data || []);
        } catch (err) {
            console.error("Error fetching posts:", err);
            alert("Failed to get posts. Please refresh the page.");
        }
    }


    //FUNCTION TO CREATE COMMENT
    async function createComment(postId) {
        try {
            // console.log(postId, commentRef.current,"FUNCTION OF COMMENT ")

            const comment = window.prompt("Enter your comment")
            if (!comment) return alert("Please enter comment to post")

            const res = await commentApi.post(`/create/${postId}`, { text: comment })
            await getAllComments(postId)

            console.log(res, "FUNCTION OF COMMENT CREATION")
        } catch (error) {
            console.log(error, "ERROR FROM CREATE_COMMENT FUNCTION");

        }

    }

    //FUNCTION TO GET ALL POSTS
    async function getAllComments(postId) {
        try {
            const res = await commentApi.get(`/${postId}`)
            setAllComments((prev) => [...prev, ...(res.data.data || [])]);
            console.log(res, "Function from getAll comments")
        } catch (error) {
            console.log(error, "ERROR from getAllComments")
        }
    }





    //function to Update post
    // async function updatePost(postId) {
    //     ///update/:id
    //     try {
    //         const res = await postApi.put(`update/${postId}`,{text:"Kimi Tailibani",image:"https://res.cloudinary.com/daggocniz/image/upload/v1761809500/profile-pics/bklgwizjycwqqe0ofgfh.png"})
    //         console.log(res,"Response from updatePost")
    //     } catch (error) {
    //         console.log(error,"ERROR from updatepost")
    //     }
    // }

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        if (allPosts.length > 0 && allComments.length === 0) {
            allPosts.forEach(post => getAllComments(post._id));
        }
    }, [allPosts]);

    return (
        <div className="absolute left-[17.5vw] top-[19vh] max-w-md mx-auto bg-black text-white border border-gray-700 rounded-xl mt-5">
            {allPosts.map((post) => (
                <div key={post._id} className="p-3 pb-[15vh] border-b border-gray-800">
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
                                <p className="font-semibold text-sm">
                                    {post.user == "6901c85c7bf58b027f0f1ad4"
                                        ? "Vivek Jadhav"
                                        : post.user}
                                </p>
                                <p className="text-xs text-gray-400">Hyderabad</p>
                            </div>
                        </div>
                        {dropDown ? (
                            <div className="absolute rounded-3xl z-40 right-1.5 top-1.5 h-[13vh] w-[10vw] bg-[#000000]">
                                <IoClose
                                    size={20}
                                    className="w-full cursor-pointer"
                                    onClick={() => setDropDown((prev) => !prev)}
                                />
                                <button
                                    className="w-full cursor-pointer hover:bg-gray-700 rounded-2xl"
                                    onClick={() => updatePost(post._id)}
                                >
                                    <span className="text-red-500 w-full text-center font-semibold">
                                        Update Post
                                    </span>
                                </button>
                            </div>
                        ) : (
                            <FiMoreHorizontal
                                className="cursor-pointer"
                                size={20}
                                onClick={() => setDropDown((prev) => !prev)}
                            />
                        )}
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-80 overflow-hidden rounded-lg">
                        <img src={post.image} alt="post" className="object-cover w-full h-full" />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center py-2">
                        <div className="flex gap-4">
                            <FaHeart size={22} className="cursor-pointer" />
                            <input type="text" ref={commentRef} className="hidden" />
                            <FaRegComment
                                size={22}
                                onClick={() => createComment(post._id)}
                                className="cursor-pointer"
                            />
                            <FaPaperPlane size={22} className="cursor-pointer" />
                        </div>
                        <FaBookmark size={22} />
                    </div>

                    {/* Likes & Caption */}
                    <p className="font-semibold">{post.likes.length} likes</p>
                    <p>
                        <span className="font-semibold">{post.user.slice(0, 6)}</span> {post.text}
                    </p>

                    {/* Comments (moved inside per post) */}
                    <div className="flex justify-start items-center flex-col w-full">
                        {allComments
                            ?.filter((comment) => comment.post === post._id)
                            .map((item, index) => (
                                <div className="h-[3vh] w-full" key={index}>
                                    <p className="p-2.5">
                                        <strong>{item.user?.name || "Unknown User"}:</strong> {item.text}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ContentPage;
