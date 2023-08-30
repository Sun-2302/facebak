import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from '../components/CommentCard';
import Post from '../components/Post';
import NavPost from '../components/nav/NavPost';
import { NavBar } from '../components/nav/NavBar';

const PostPage = () => {

    const { postId } = useParams();

    const [post, setPost] = useState([]);

    const [user, setUser] = useState([]);

    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/posts/${postId}`);
          const fetchedPost = response.data;
          setPost(fetchedPost);

           // Une fois que nous avons le post, nous récupérons les informations de l'utilisateur
        const userResponse = await axios.get(`http://127.0.0.1:8080/users/${fetchedPost.userId}`);
        const fetchedUser = userResponse.data;
        setUser(fetchedUser);
        
      } catch (error) {
          console.error('Une erreur s\'est produite lors de la récupération du post:', error);
        }
      };

      const fetchComments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/posts/${postId}/comments`);
        const fetchedComments = response.data;
        setComments(fetchedComments);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des commentaires:', error);
      }
    };
  
      fetchComments();
      fetchPost();
    }, [postId]);


  return (
    <div>
      <NavBar />
      <div className="flex flex-col min-h-screen border w-[598px] ml-[318px]">
        <NavPost />
        <div className="container flex-grow ">
          <div className="pl-4 mb-0">
            <Post 
              postId={post.id}
              username={user.username}
              nickname={"@"+user.username}
              imageSrc={user.photo}
              PostContent={post.content}
              userId="9b12d8e1-75b4-44e9-939f-e35807a27d35"

            />
          </div>
          <div>
            {comments.map((comment) => (
               <CommentCard key={comment.id}
                 commenterName={comment.user.username}
                 commenterNickname={"@"+comment.user.username}
                 commenterImage={comment.user.photo}
                 commentContent={comment.content}
                 commentDate={new Date(comment.createdAt).toDateString()}
               />           
            )).reverse()}
          </div>          
        </div>
      </div>
    </div>

  );
};

export default PostPage;
