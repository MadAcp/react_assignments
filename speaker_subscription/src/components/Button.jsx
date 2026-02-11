import './Button.css'

const Button = ({ type = 'button', onClick, children, variant = 'primary' }) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

export default Button

