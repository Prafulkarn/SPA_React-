import { useEffect, useState } from 'react'
import '../styles/SplashScreen.css'

function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-title">
          <span className="splash-text">This is Praful Karn's react learning project</span>
        </h1>
      </div>
    </div>
  )
}

export default SplashScreen
