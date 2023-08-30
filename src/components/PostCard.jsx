import { ChatIcon, DownloadIcon, EyeIcon, HeartIcon, RefreshIcon, SaveIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export function PostCard({username, createDate, photo, content, userId, likes, comments}) {
    return(
        <div className="flex py-5 px-4 border-b border-r w-[598px] hover:bg-[#F7F7F7] cursor-pointer">
            <img className="w-10 h-10 rounded-full" src={photo} alt={`Image de profil de `}/>
            <div className="ml-4">
                <div className="flex">
                    <Link to={`/users/${userId}`}>
                        <p className="font-semibold cursor-pointer hover:underline">{username}</p>
                    </Link>
                    <p className="text-gray-500 text-sm ml-1 mt-[2px]">@{username}</p>
                    <p className="mx-1 -mt-1">.</p>
                    <p className="text-gray-500">{createDate}</p>
                    <button className="ml-auto">
                        <img src="./icon/more.svg" alt="" className="w-[26.25px] hover:bg-[#E8F5FD] rounded-full p-1"/>
                    </button>
                </div>
                <p className="mt-4">{content}</p>
                <div className="flex justify-center mt-4">
                    <div className="flex items-center mr-6 gap-1">
                        <ChatIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
                        <span className="text-gray-600">{comments}</span> 
                    </div>
                    <div className="flex items-center mr-6 gap-1">
                        <RefreshIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
                        <span className="text-gray-600">0</span> 
                    </div>
                    <div className="flex items-center mr-6 gap-1">
                        <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-700 cursor-pointer transition-transform transform hover:scale-105" />
                        <span className="text-gray-600">{likes}</span> 
                    </div>
                    <div className="flex items-center mr-6 gap-1">
                        <EyeIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
                        <span className="text-gray-600">0</span> 
                    </div>
                    <div className="flex items-center mr-6 gap-1">
                        <DownloadIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
                        <span className="text-gray-600">0</span>
                    </div>
                </div>
           
        </div>
            

        </div>
    )
}