import '../pages/HomePage.css'
import Navbar from '../components/PageHomeComponents/Navbar.jsx';
import PostItem from '../components/PageHomeComponents/PostItem.jsx';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import ImagePost from '.././img/post.png'

function HomePage() {
  return (
    <>
    <Navbar />
    <PostItem userName="Henry" userLocation="Paraguai" postText="Earlier this year, a friend of mine almost had his young daughter taken from him in California just because he wanted her to wait a few years to permanently transition." postImage={ImagePost} likes="567"/>
    <BottomNavigation />
    </>
  );
};

export default HomePage;