import { FaArrowLeft } from 'react-icons/fa';
import { EditProfileButtons } from '../components/Button';
import { NavBar } from '../components/nav/NavBar';
import Banner from '../components/profile/Banner';
import ProfileDetails from '../components/profile/ProfileDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProfilePage() {

  return (
    <div>
        <NavBar />
        <div className='bg-black-300 w-[600px] ml-[318px]'>
          <div className='flex flex-col'>
             <div className='flex flex-row items-center h-[60px] bg-white'>
                <div className='w-1/4'>
                    <FaArrowLeft size={14} color='#333' className='ml-6' />
                  </div>
                <div className='w-3/4 flex flex-col -ml-20 -mt-1'>
                    <h1 className='font-bold'></h1>
                    <h1 className='text-gray-600'>0 posts</h1>
                </div>
              </div>
              <div className='bg-white min-h-screen'>
                   <div className="flex flex-col">
                      <Banner profilImg='tae.jpg'/>
                      <div className="flex justify-end mt-1 ">
                          <EditProfileButtons />
                      </div>
                   </div>
                     <ProfileDetails bio={user.bio} joinedAt={user.joinedAt} username={user.username} />
               </div>
          </div>
        </div>
    </div>
    
  );
}

