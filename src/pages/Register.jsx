import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Register({ onRegister, existingEmails, existingUsernames }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()
    const normalizedUsername = username.trim().toLowerCase()

    if (!normalizedEmail || !normalizedUsername || !password) {
      setSuccess('')
      setError('Please fill in all fields')
      return
    }

    if (!normalizedEmail.includes('@')) {
      setSuccess('')
      setError('Please enter a valid email')
      return
    }

    if (normalizedUsername.length < 3) {
      setSuccess('')
      setError('Username must be at least 3 characters')
      return
    }

    if (!/^[a-z0-9_]+$/i.test(normalizedUsername)) {
      setSuccess('')
      setError('Username can only contain letters, numbers, and underscore')
      return
    }

    if (password.length < 6) {
      setSuccess('')
      setError('Password must be at least 6 characters')
      return
    }

    if (existingEmails.includes(normalizedEmail)) {
      setSuccess('')
      setError('This email is already registered. Please login.')
      return
    }

    if (existingUsernames.includes(normalizedUsername)) {
      setSuccess('')
      setError('This username is already taken. Please choose another one.')
      return
    }

    onRegister({ email: normalizedEmail, username: normalizedUsername, password })
    setError('')
    setSuccess('Registration successful. Redirecting to login...')

    setTimeout(() => {
      navigate('/login')
    }, 1200)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register First</h2>

        <div className="notice-message">
          Create your account first, then login to access the project.
        </div>

        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="register-email">Email:</label>
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-username">Username:</label>
            <input
              type="text"
              id="register-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password:</label>
            <input
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Choose a password"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="login-button">
            Register
          </button>
        </form>

        <div className="login-footer">
          <p>
            Already registered? <Link to="/login">Go to login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
