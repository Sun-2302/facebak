import React, { useState } from 'react';
import {
  ChatIcon,
  RefreshIcon,
  HeartIcon,
  SaveIcon,
  DownloadIcon
} from '@heroicons/react/solid';
import { ReplyButton } from './Button';
import { CommentInput } from './Input';
import axios from 'axios';

const Post = ({userId, username, nickname, imageSrc, PostContent, postId, likes}) => {
  
  const [content, setCommentContent] = useState("");

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = async (e) => {
 

    try {
      const response = await axios.put(`http://127.0.0.1:8080/posts/${postId}/comments`, {
        content,
        userId,
      });

      console.log('Nouveau commentaire créé:', response.data);
      // Mettez à jour l'état de votre application ou effectuez d'autres actions en cas de succès
      // Réinitialisez le contenu du commentaire après la soumission si nécessaire
      setCommentContent("");
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la création du commentaire:', error);
      // Gérez l'erreur, affichez un message d'erreur à l'utilisateur, etc.
    }
  };

  return (
    <div className="bg-white py-4 mt-0 w-[580px]">
      <div className="flex space-x-2 items-start">
        <img
          className="w-10 h-10 rounded-full"
          src={imageSrc} // Utilisez la source d'image passée en prop
          alt={`Image de profil de ${username}`}
        />
        <div className="flex">
          <div className="flex flex-col">
            <span className="text-base font-semibold -mt-0.5 ml-1">{username}</span>
            <p className="text-gray-500 -mt-0.5">{nickname}</p>
          </div>
          <button className='ml-96'>
            <span className='font-bold -mt-05 text-gray-600  hover:text-blue-500 rounded-full py-0.5 px-2 absolute  transform -translate-x-1/2 -translate-y-2 hover:bg-blue-100'>
                ...
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className=" text-black-700">{PostContent}</p>
      </div>
      <div className="flex items-center mt-3">
         <p className="flex items-center">
           7:58 AM <span className="mt-0.5 mx-1">·</span> Jul 14, 2023
         </p>
         <p>
           <span className="mt-0.5 mx-1">·</span>
           <span className="font-semibold">427.7k</span> Views
         </p>
      </div>
      <div className="border-b border-gray-100 mt-3"></div>

      <div className='flex items-center mt-3'>
        <p className='mr-4'>
          <span className='font-semibold mx-1'>573</span>Reposts
        </p>
        <p className='mr-4'>
          <span className='font-semibold mx-1'>6</span>Quotes
        </p>
        <p className='mr-4'>
          <span className='font-semibold mx-1'>{likes}</span>Likes
        </p>
        <p className='mr-4'>
          <span className='font-semibold mx-1'>23</span>Bookmarks
        </p>
      </div>

      <div className="border-b border-gray-100 mt-3"></div>

      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <ChatIcon className="w-6 h-6 m-7 mt-3 mb-3 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
          <RefreshIcon className="w-6 h-6 m-7 mt-3 mb-3 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
          <HeartIcon className="w-6 h-6 m-7 mt-3 mb-3 text-gray-400 hover:text-red-700 cursor-pointer transition-transform transform hover:scale-105"/>
          <SaveIcon className="w-6 h-6 m-7 mt-3 mb-3 text-gray-400 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105" />
          <DownloadIcon className="w-6 h-6 m-7 mt-3 mb-3 text-gray-400 hover:text-green-500 cursor-pointer transition-transform transform hover:scale-105" />
        </div>
      </div>

      <div className="border-b border-gray-100 mt-1"></div>

        <form className='flex items-center border-b py-4' onSubmit={handleSubmit}>
          <img className='w-14 h-14 rounded-full' src="ariana1.jpeg" alt="" />
          <CommentInput value={content} onChange={handleCommentContentChange}/>
          <ReplyButton />
        </form>
      
    </div>
    


    
  );
};

export default Post;
