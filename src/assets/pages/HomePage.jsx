import '../pages/HomePage.css'
import Navbar from '../components/PageHomeComponents/Navbar.jsx';
import PostItem from '../components/PageHomeComponents/PostItem.jsx';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import PostFeed from '../components/PageHomeComponents/PostFeed.jsx';

function HomePage() {
  return (
    <div className='body-home'>
    <Navbar />
    <PostFeed />
    <BottomNavigation />
    </div>
  );
};

export default HomePage;