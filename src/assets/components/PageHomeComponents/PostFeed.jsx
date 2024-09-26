import '../PageHomeComponents/PostFeed.css';
import React, { useState, useEffect } from 'react';
import PostItem from '../PageHomeComponents/PostItem.jsx'
import { getPosts } from '../../../services/apiServices.js';


const PostFeed = () => {
  const [posts, setPost] = useState(null); // Estado para armazenar o usuário
  const [error, setError] = useState(null); // Estado para armazenar o erro

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(); // Espera os dados do usuário
        setPost(postsData); // Armazena os dados no estado
      } catch (error) {
        setError("Erro ao buscar usuário.");
      }
    };

    fetchPosts(); // Chama a função quando o componente é montado
    console.log(posts);
  }, []);

  // Verifica se houve erro ao buscar o usuário
  if (error) {
    return <div>{error}</div>;
  }

  // Verifica se os dados do usuário estão disponíveis
  if (!posts) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="post-feed">
      {posts.map(post => (
        <PostItem
          key={post.id}
          userProfile={`http://localhost:8080${post.user.img}`}
          userName={post.user.name}
          userLocation="Paraguai"
          postText={post.text}
          postImage={`http://localhost:8080${post.img}`}
          likes="567"
        />
      ))}
    </div>
  );
}

export default PostFeed;