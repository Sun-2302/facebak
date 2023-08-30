import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import { Link } from 'react-router-dom';
import { ArrowButton } from '../Button';

const NavPost = () => {

  return (
   
      <div className="fixed  w-[598px] h-[53px] border-b border-r px-4 py-3 backdrop-blur-sm">
        <Link to={"/home"}>
          <div className="flex items-center gap-2">
            <ArrowButton />
            <span className='text-2x font-bold'>Post</span>
          </div>
        </Link>
        
      </div>

  );
};

export default NavPost;
