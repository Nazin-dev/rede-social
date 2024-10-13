import './PageUserOther.css';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import UserOtherInfo from '../components/PageUserOtherComponents/PageUserOtherInfo.jsx';
import { useParams } from 'react-router-dom';

function PageUserOther() {
  
  const { id } = useParams();

  return(
    <div className="body-other-user">
      <UserOtherInfo userid={id}/>
      <BottomNavigation />
    </div>
  );
};

export default PageUserOther;