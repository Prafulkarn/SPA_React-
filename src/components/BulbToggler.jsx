import { useState } from 'react'
import bulbOnIcon from '../assets/bulb-on.png'
import bulbOffIcon from '../assets/bulb-off.png'

function BulbToggler() {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn((previous) => !previous)
  }

  return (
    <section className="feature-card">
      <h2>Light Bulb Toggle</h2>
      <div className="bulb-wrapper" aria-live="polite">
        <img
          className="bulb-image"
          src={isOn ? bulbOnIcon : bulbOffIcon}
          alt={isOn ? 'Bulb ON' : 'Bulb OFF'}
        />
      </div>
      <p className="status-text">Status: {isOn ? 'ON' : 'OFF'}</p>
      <button type="button" onClick={handleToggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </section>
  )
}

export default BulbToggler
// Updated
