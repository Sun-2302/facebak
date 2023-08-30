import React from 'react';
import { FaCalendar } from 'react-icons/fa'; // Importez les icônes de React Icons

function ProfileDetails({username, bio, joinedAt}) {
    let link2 = ["Posts","Replied","Highlight ","Media"," Likes"];
  return (
    <div className="p-4 ">
      <div className=" mb-4">
        <h1 className="font-bold text-xl mr-2">{username}</h1>
        <span className="text-gray-500">@{username}</span>
      </div>
      <p className="text-gray-800 mb-4">
        {bio}
      </p>
      <div className="flex items-center text-gray-500 mb-2">
        <FaCalendar className="mr-1" />
        Joined in {joinedAt}
      </div>
      <div className="flex text-gray-500">
        <div className="mr-4">
          <span className='text-black font-semibold'>1,234</span> Following
        </div>
        <div>
          <span className='text-black font-semibold'>12 </span>Followers
        </div>
      </div>
        <ul className="flex mt-4 space-x-5 w-full gap-0">
                    {link2.map(link =>(
                            <li className=" w-full px-6 py-3  border-b hover:border-black transition text-gray-700 font-semibold hover:bg-gray-200 hover:bg-opacity-75">
                                {link}
                            </li>
                    ))}     
        </ul>
      </div>
    
    
  );
}

export default ProfileDetails;
