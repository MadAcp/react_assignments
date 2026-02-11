import React from 'react';
import './CheckboxField.css';

const CheckboxField = ({ 
  name, 
  label, 
  checked, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="checkbox-group">
      <label>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;

