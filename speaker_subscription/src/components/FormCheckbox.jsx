import './FormCheckbox.css'

const FormCheckbox = ({ name, checked, onChange, label }) => {
  return (
    <div className="form-group checkbox-group">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}

export default FormCheckbox

