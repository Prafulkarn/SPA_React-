import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h2>My First React Lab</h2>
        <nav className="nav-menu" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Contact
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Login
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
// Updated
