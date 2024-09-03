import '../components/Input.css'

function Input({name, type}) {
  return (
  <input type={type} className="styled-input " placeholder={name} />
  )
};

export default Input;