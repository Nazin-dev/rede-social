import '../PageAuthComponents/CustomFileInput.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function CustomFileInput({onChange}) {
  return (
    <div className='input-container'>
      <label htmlFor="file" className="custom-file-upload">
        <p>Foto de perfil</p>
        <i className="bi bi-arrow-right-circle"></i>
      </label>
      <input className="input-upload" id="file" type="file" onChange={onChange}/>
    </div>
  )
}


export default CustomFileInput;
