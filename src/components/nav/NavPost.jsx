import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import { Link } from 'react-router-dom';
import { ArrowButton } from '../Button';

const NavPost = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Ajoutez un écouteur d'événements pour suivre le défilement de la page
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        // Si la page est défilée, activez le flou
        setScrolling(true);
      } else {
        // Si la page est en haut, désactivez le flou
        setScrolling(false);
      }
    });

    // Retirez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  // Définissez la classe en fonction de l'état de défilement
  const navClass = `bg-white p-3 pr-96 text-dark sticky top-0 backdrop-blur-sm ${
    scrolling ? 'backdrop-blur-sm' : ''
  }`;

  return (
    <nav className={navClass}>
      <div className="container">
        <Link to={"/home"}>
          <div className="flex items-center gap-2">
            <ArrowButton />
            <span className='text-2x font-bold'>Post</span>
          </div>
        </Link>
        
      </div>
    </nav>
  );
};

export default NavPost;
