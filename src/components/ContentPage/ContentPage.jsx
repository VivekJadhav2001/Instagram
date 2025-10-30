import React, { useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaPaperPlane, FaBookmark } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import postApi from "../../utils/postApi";

function ContentPage() {
    const [allPosts, setAllPosts] = useState([]);

    async function getAllPosts() {
        try {
            const res = await postApi.get("/all-posts");
            setAllPosts(res.data.data || []);
        } catch (err) {
            console.error("Error fetching posts:", err);
            alert("Failed to get posts. Please refresh the page.");
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className="absolute left-[17.5vw] top-[19vh] max-w-md mx-auto bg-black text-white border border-gray-700 rounded-xl mt-5">
            {allPosts.map((post) => (
                <div key={post._id} className="p-3 border-b border-gray-800">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
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
                        <FiMoreHorizontal size={20} />
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-80 overflow-hidden rounded-lg">
                        <img
                            src={post.image}
                            alt="post"
                            className="object-cover w-full h-full"
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
                        <span className="font-semibold">{post.user}</span> {post.text}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ContentPage;
