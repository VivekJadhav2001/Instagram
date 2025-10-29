import React, { useState } from "react";
import { FaHeart, FaRegComment, FaPaperPlane, FaBookmark } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { posts } from '../../data/posts'
function ContentPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className=" absolute left-[17.5vw] top-[19vh] max-w-md mx-auto bg-black text-white border border-gray-700 rounded-xl mt-5">
            {posts.map((post) => (
                <div key={post.id} className="p-3">
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
                                <p className="font-semibold">{post.username}</p>
                                <p className="text-xs text-gray-400">{post.location}</p>
                            </div>
                        </div>
                        <FiMoreHorizontal size={20} />
                    </div>

                    {/* Image carousel */}
                    <div className="relative w-full h-80 overflow-hidden rounded-lg">
                        <img
                            src={post.images[currentIndex]}
                            alt="post"
                            className="object-cover w-full h-full"
                        />
                        {post.images.length > 1 && (
                            <>
                                <button
                                    onClick={() =>
                                        setCurrentIndex((prev) =>
                                            prev === 0 ? post.images.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full"
                                >
                                    {"<"}
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndex((prev) =>
                                            prev === post.images.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-1 rounded-full"
                                >
                                    {">"}
                                </button>
                            </>
                        )}
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
                    <p className="font-semibold">{post.likes} likes</p>
                    <p>
                        <span className="font-semibold">{post.username}</span> {post.caption}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">{post.time} ago</p>
                </div>
            ))}
        </div>
    );
}

export default ContentPage