import { useState } from 'react'
import '../styles/Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Simulate successful login
    setError('')
    setSubmitted(true)
    console.log('Login attempt:', { email, password })
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setEmail('')
      setPassword('')
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        
        {submitted && (
          <div className="success-message">
            ✓ Login successful! Welcome back.
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up here</a></p>
          <p><a href="#forgot">Forgot password?</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
