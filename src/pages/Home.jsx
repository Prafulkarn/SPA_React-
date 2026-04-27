import BulbToggler from '../components/BulbToggler'
import PasswordToggler from '../components/passwordToggler'
import ItemListManager from '../components/ItemListManager'
import CounterPanel from '../components/CounterPanel'

function Home() {
  return (
    <main>
      <h1>LAB-4 React Tasks</h1>
      <p className="page-subtitle">All exercises are completed inside this single React app.</p>
      <div className="feature-grid">
        <BulbToggler />
        <PasswordToggler />
        <ItemListManager />
        <CounterPanel />
      </div>
    </main>
  )
}

export default Home
// Updated
