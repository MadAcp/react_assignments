import './FormRadioGroup.css'

const FormRadioGroup = ({ label, name, value, onChange, options }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default FormRadioGroup

