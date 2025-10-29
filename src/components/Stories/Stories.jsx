import React from 'react'
import { storyData } from '../../data/story'

function Stories() {
    return (
        <div className="absolute left-[16.5vw] flex gap-4 overflow-x-auto p-4 bg-black text-white">
            {storyData.map((story) => (
                <div key={story.id} className="flex flex-col items-center">
                    <div className="bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5 rounded-full cursor-pointer">
                        <img
                            src={story.image}
                            alt={story.name}
                            className="w-16 h-16 object-cover rounded-full border-2 border-black"
                        />
                    </div>
                    <p className="text-xs mt-1">{story.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Stories