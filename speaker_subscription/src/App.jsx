import BrowserChrome from './components/BrowserChrome'
import SpeakerForm from './components/SpeakerForm'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <BrowserChrome>
        <SpeakerForm />
      </BrowserChrome>
    </div>
  )
}

export default App
