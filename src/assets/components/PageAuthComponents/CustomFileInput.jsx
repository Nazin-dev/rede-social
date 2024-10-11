import React, { useState } from 'react';
import '../PageAuthComponents/CustomFileInput.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CustomFileInput({fileName, onChange}) {

  return (
    <div className='input-container'>
      <label htmlFor="file-upload" className="custom-file-upload">
        <p>{fileName || "Foto de perfil"}</p> {/* Exibe o nome do arquivo ou "Foto de perfil" */}
        <i className="bi bi-arrow-right-circle bi-upload-pic"></i>
      </label>
      <input 
        className="input-upload" 
        id="file-upload" 
        type="file" 
        accept="image/*"
        onChange={onChange} // Chamando a função quando o arquivo é alterado
      />
    </div>
  );
}

export default CustomFileInput;