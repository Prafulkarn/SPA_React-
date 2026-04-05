import { useState } from 'react'
import hiddenIcon from '../assets/hidden.png'
import showIcon from '../assets/show.png'

function PasswordToggler() {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const togglePassword = () => {
        setShowPassword((previous) => !previous)
    }

    return (
        <section className="feature-card">
            <h2>Password Show/Hide</h2>
            <div className="password-row">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    type="button"
                    onClick={togglePassword}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                    <img
                        src={showPassword ? hiddenIcon : showIcon}
                        alt={showPassword ? 'Hide password' : 'Show password'}
                        width="22"
                        height="22"
                    />
                </button>
            </div>
            <p className="status-text">{showPassword ? 'Password is visible' : 'Password is hidden'}</p>
        </section>
    )
}

export default PasswordToggler