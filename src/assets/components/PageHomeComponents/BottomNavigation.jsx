import '../PageHomeComponents/BottomNavigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <div className="icon home"><i className="bi bi-house"></i></div>
      <div className="icon search"><i className="bi bi-search"></i></div>
      <div className="icon add-post"><i className="bi bi-plus-square"></i></div>
      <div className="icon profile"><i className="bi bi-person"></i></div>
    </div>
  );
};

export default BottomNavigation;