import './Input.css'

function Input({placeholder, name, type, onChange}) {
  return (
  <input type={type} className="styled-input " name={name} placeholder={placeholder} onChange={onChange} />
  )
};

export default Input;