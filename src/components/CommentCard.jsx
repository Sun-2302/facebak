import React from 'react';
import {
  ChatIcon,
  RefreshIcon,
  HeartIcon,
  EyeIcon,
  DownloadIcon
} from '@heroicons/react/solid';

const CommentCard = ({ commenterName, commenterNickname, commenterImage, commentContent, commentDate }) => {
  return (
    <div className="bg-white p-4 mt-0.5 flex space-x-4 items-start hover:bg-gray-200 w-[596px]">
      <img
        className="w-10 h-10 rounded-full"
        src={commenterImage}
        alt={`Image de profil de ${commenterName}`}
      />
      <div className="flex-grow">
        <div className="flex items-center pr-4">
          <span className="text-base font-semibold">{commenterName}</span>
          <span className="text-gray-500">{commenterNickname}</span>
          <span className="text-gray-500"><span className="mt-0.5 mx-1">·</span>{commentDate}</span>
          <button className='ml-auto'>
               <span className='font-bold -mt-0.1 text-gray-600  hover:text-blue-600 rounded-full py-0.5 px-2 absolute  transform -translate-x-1/2 -translate-y-2 hover:bg-blue-100'>
                  ...
               </span>
             </button>
        </div>
        <p className="text-gray-800">{commentContent}</p>
        <div className="flex justify-center mt-2  mr-20">
         <div className="flex items-center mr-6 ">
             <ChatIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
             <span className="text-gray-600">1</span> 
         </div>
         <div className="flex items-center mr-6 ">
              <RefreshIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
             <span className="text-gray-600">16</span> 
         </div>
         <div className="flex items-center mr-6 ">
             <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-700 cursor-pointer transition-transform transform hover:scale-105" />
             <span className="text-gray-600">34</span> 
         </div>
         <div className="flex items-center mr-6 ">
              <EyeIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
             <span className="text-gray-600">100</span> 
         </div>
         <div className="flex items-center mr-6 ">
              <DownloadIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
             <span className="text-gray-600">20</span>
         </div>
       </div>

      </div>
    </div>
  );
};

export default CommentCard;
