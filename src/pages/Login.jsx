import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('Use your username and password to login.')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !password) {
      setError('Please fill in all fields')
      return
    }

    const result = onLogin({ username: username.trim().toLowerCase(), password })

    if (!result.success) {
      setInfo('')
      setError('Invalid credentials. Only registered users can login.')
      return
    }

    setError('')
    setInfo(result.isAdmin ? 'Admin login successful. Passwords are visible on Users page.' : '')
    navigate('/')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {info && <div className="notice-message">{info}</div>}

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoComplete="username"
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
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Only registered users can login to access the project pages.</p>
          <p>
            Need an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
