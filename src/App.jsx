import { useEffect, useMemo, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import UsersList from './pages/UsersList'

const USERS_STORAGE_KEY = 'lab4_registered_users'

function buildUsernameFromEmail(email, usedNames) {
  const base = (email?.split('@')[0] || 'user').replace(/[^a-zA-Z0-9_]/g, '') || 'user'
  let nextName = base.toLowerCase()
  let counter = 1

  while (usedNames.has(nextName)) {
    counter += 1
    nextName = `${base.toLowerCase()}${counter}`
  }

  usedNames.add(nextName)
  return nextName
}

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }

    const usedNames = new Set()

    return parsed
      .map((user) => {
        const email = typeof user?.email === 'string' ? user.email.trim().toLowerCase() : ''
        const password = typeof user?.password === 'string' ? user.password : ''
        const preferredUsername = typeof user?.username === 'string' ? user.username.trim().toLowerCase() : ''

        if (!email || !password) {
          return null
        }

        let username = preferredUsername || buildUsernameFromEmail(email, usedNames)
        if (usedNames.has(username) && preferredUsername) {
          username = buildUsernameFromEmail(email, usedNames)
        } else {
          usedNames.add(username)
        }

        return { email, username, password }
      })
      .filter(Boolean)
  } catch {
    return []
  }
}

function isAdminUser(username, password) {
  return username === 'admin' && password === 'admin@123'
}

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}

function App() {
  const [users, setUsers] = useState(() => loadUsers())
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
  }, [users])

  const hasRegisteredUsers = users.length > 0
  const isLoggedIn = Boolean(currentUser)
  const isAdmin = currentUser?.isAdmin ?? false

  const userEmails = useMemo(() => users.map((user) => user.email.toLowerCase()), [users])
  const usernames = useMemo(() => users.map((user) => user.username.toLowerCase()), [users])

  const handleRegister = ({ email, username, password }) => {
    setUsers((prevUsers) => [...prevUsers, { email, username, password }])
  }

  const handleLogin = ({ username, password }) => {
    if (isAdminUser(username, password)) {
      setCurrentUser({ username: 'admin', isAdmin: true })
      return { success: true, isAdmin: true }
    }

    const match = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password,
    )

    if (!match) {
      return { success: false }
    }

    setCurrentUser({ username: match.username, isAdmin: false })
    return { success: true, isAdmin: false }
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <h2>My First React Lab</h2>
        <nav className="nav-menu" aria-label="Main navigation">
          {!isLoggedIn && (
            <>
              <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Register
              </NavLink>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Login
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Contact
              </NavLink>
              <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Users
              </NavLink>
              <button type="button" className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to={hasRegisteredUsers ? '/login' : '/register'} replace />
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UsersList users={users} showPasswords={isAdmin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Register
                onRegister={handleRegister}
                existingEmails={userEmails}
                existingUsernames={usernames}
              />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : hasRegisteredUsers ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
