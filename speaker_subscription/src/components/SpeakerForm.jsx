import { useState } from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRadioGroup from './FormRadioGroup'
import FormTextArea from './FormTextArea'
import FormCheckbox from './FormCheckbox'
import Button from './Button'
import './SpeakerForm.css'

const SpeakerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    talkType: 'main-stage',
    tshirtSize: 'extra-small',
    abstract: '',
    available: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted! Check console for details.')
  }

  const talkTypeOptions = [
    { value: 'main-stage', label: 'Main Stage' },
    { value: 'workshop', label: 'Workshop' }
  ]

  const tshirtSizeOptions = [
    { value: 'extra-small', label: 'Extra Small' },
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'extra-large', label: 'Extra Large' }
  ]

  return (
    <div className="speaker-form-wrapper">
      <div className="form-header">
        <h1>Speaker Submission</h1>
        <p>Want to speak at our fake conference?<br />Fill out this form.</p>
      </div>

      <form onSubmit={handleSubmit} className="speaker-form">
        <FormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <FormRadioGroup
          label="Type of Talk"
          name="talkType"
          value={formData.talkType}
          onChange={handleChange}
          options={talkTypeOptions}
        />

        <FormSelect
          label="T-Shirt Size"
          name="tshirtSize"
          value={formData.tshirtSize}
          onChange={handleChange}
          options={tshirtSizeOptions}
        />

        <FormTextArea
          label="Abstract"
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          rows={6}
          helperText="Describe your talk in 500 words or less"
          required
        />

        <FormCheckbox
          name="available"
          checked={formData.available}
          onChange={handleChange}
          label="I'm actually available the date of the talk"
        />

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default SpeakerForm

