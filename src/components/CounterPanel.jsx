import { useState } from 'react'

function CounterPanel() {
  const [count, setCount] = useState(0)

  return (
    <section className="feature-card">
      <h2>Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="button-group">
        <button type="button" onClick={() => setCount((previous) => previous + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((previous) => previous - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default CounterPanel
// Updated
