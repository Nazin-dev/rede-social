import '../pages/HomePage.css'
import Navbar from '../components/PageHomeComponents/Navbar.jsx';
import PostItem from '../components/PageHomeComponents/PostItem.jsx';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import PostFeed from '../components/PageHomeComponents/PostFeed.jsx';
import { useState, useEffect } from 'react';
import { getPosts } from '../../services/apiServices.js';

function HomePage() {
  // Define um estado para armazenar os posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect para buscar os posts quando o componente for montado
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await getPosts(); // Espera a resolução da Promise
        setPosts(response); // Define o estado com os posts retornados
        console.log(response);
      } catch (error) {
        console.error('Erro ao pegar os posts', error);
      } finally {
        setLoading(false); // Define loading como falso quando a requisição termina
      }
    }

    fetchPosts(); // Chama a função para buscar os posts
  }, []); // Array de dependências vazio faz o useEffect ser executado apenas uma vez

  return (
    <div className='body-home'>
      <Navbar />
      {loading ? (
        <p>Carregando posts...</p> // Mostra uma mensagem enquanto os posts estão sendo carregados
      ) : (
        <PostFeed posts={posts} /> // Passa os posts para o componente PostFeed
      )}
      <BottomNavigation />
    </div>
  );
}

export default HomePage;