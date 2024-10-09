import './PageUserOther.css';
import BottomNavigation from '../components/PageHomeComponents/BottomNavigation.jsx';
import UserOtherInfo from '../components/PageUserOtherComponents/PageUserOtherInfo.jsx';

function PageUserOther() {
  return(
    <div className="body-other-user">
      <UserOtherInfo />
      <BottomNavigation />
    </div>
  );
};

export default PageUserOther;