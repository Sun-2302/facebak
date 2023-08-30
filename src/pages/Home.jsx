import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { NavBar } from '../components/nav/NavBar';
import { NavHome } from '../components/nav/NavHome';
import { PostForm } from '../components/forms/PostForm';
import { PostCard } from '../components/PostCard';



export const HomePage = () => {
  const [posts, setPosts] = useState([]); // Créez un état pour stocker les données des posts

  useEffect(() => {
    // Effectuez l'appel API lors du chargement du composant
    const fetchPosts = async () => {
      try {
        const response = await axios.get(' http://127.0.0.1:8080/posts');
        const fetchedPosts = response.data;
        setPosts(fetchedPosts); // Mettez à jour l'état avec les données des posts
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des articles:', error);
      }
    };

    fetchPosts(); // Appelez la fonction pour récupérer les données lors du montage du composant
  }, []);

  // Maintenant, vous pouvez utiliser la variable "posts" dans votre composant pour afficher les données
  return (
    <div className='flex'>
        <NavBar />
        <div className='ml-[318px]'>
            <NavHome />
            <div className='mt-[53px]'>
              <PostForm />
            </div>
            <div>
                {posts.map((post) => (
                  <Link to={`/posts/${post.id}`}>
                    <PostCard key={post.id}
                            userId={post.userId}
                            username={post.user.username}
                            photo={post.user.photo}
                            content={post.content}
                            createDate= {new Date(post.createdAt).toDateString()}  
                            likes={post._count.reactions}
                            comments={post._count.comments}          
                    />
                  </Link>       
                )).reverse()}
            </div>
        </div>
    </div>
  );
};
