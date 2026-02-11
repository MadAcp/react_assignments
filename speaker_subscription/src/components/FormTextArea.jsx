import './FormTextArea.css'

const FormTextArea = ({ label, name, value, onChange, rows = 6, helperText, required = false }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  )
}

export default FormTextArea

