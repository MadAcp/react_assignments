import './BrowserChrome.css'

const BrowserChrome = ({ children }) => {
  return (
    <div className="browser-container">
      <div className="browser-chrome">
        <div className="browser-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="browser-url">EXAMPLE.HTML</div>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  )
}

export default BrowserChrome

