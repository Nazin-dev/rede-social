import '../PageHomeComponents/Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import melonzone from '../../img/melonzone.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon notification"><i className="bi bi-bell"></i></div>
      <div className='icon melonzone'><img src={melonzone} alt="" /></div>
      <div className="icon send-message"><i className="bi bi-send"></i></div>
    </div>
  );
};

export default Navbar;