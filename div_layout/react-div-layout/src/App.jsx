import './App.css'
import Header from './components/Header'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />

      <div className="main-content">
        <Sidebar1 />
        <Content />
        <Sidebar2 />
      </div>

      <Footer />
    </div>
  )
}

export default App
