import '../PageAuthComponents/CustomFileInput.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function CustomFileInput() {
  return (
    <div className='input-container'>
      <label htmlFor="file-upload" className="custom-file-upload">
        <p>Foto de perfil</p>
        <i className="bi bi-arrow-right-circle"></i>
      </label>
      <input className="input-upload" id="file-upload" type="file" />
    </div>
  )
}


export default CustomFileInput;
