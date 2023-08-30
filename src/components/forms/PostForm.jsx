import React, { useState } from 'react';
import axios from 'axios';

import { PostInput } from '../Input';
import { PostButton } from '../Button';

export const PostForm = () => {
  const [content, setContent] = useState('');
  const userId = '9b12d8e1-75b4-44e9-939f-e35807a27d35'; // ID d'utilisateur statique

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
   
    try {
      const response = await axios.put('http://127.0.0.1:8080/posts', {
        content,
        userId,
      });

      console.log('Nouveau post créé:', response.data);
      // Mettez à jour l'état de votre application ou effectuez d'autres actions en cas de succès

      // Réinitialisez le contenu du textarea après la soumission
      setContent('');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la création du post:', error);
      // Gérez l'erreur, affichez un message d'erreur à l'utilisateur, etc.
    }
  };


  function iconList() {
    let icons= ["./icon/image.svg","./icon/gif.svg","./icon/lists.svg","./icon/smiley.svg","./icon/calendar.svg","./icon/map-pin.svg"];
    for (let i = 0; i < icons.length; i++) {
      return icons.map(icon =>(
        <img src={icon} alt="" className='w-[19px]'/>
      )) 
  }
  }
  return (
    <div className='w-[598px] border-b border-r flex pt-3 pb-2 px-3'>
      <img className="w-10 h-10 rounded-full" src="billie.jpg" alt={`Image de profil de `}/>
      <form className='flex flex-col w-[520px]' onSubmit={handleSubmit}>
        <PostInput value={content} onChange={handleContentChange}/>
        <div className='flex ml-3'>
          <div className='flex'>
            <img src="./icon/image.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
            <img src="./icon/gif.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
            <img src="./icon/smiley.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
            <img src="./icon/calendar.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
            <img src="./icon/calendar.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
            <img src="./icon/map-pin.svg" alt="" className='w-[30px] hover:bg-[#E8F5FD] rounded-full p-1'/>
          </div>
          <PostButton />
        </div>
      </form>
    </div>
    
  );
};
