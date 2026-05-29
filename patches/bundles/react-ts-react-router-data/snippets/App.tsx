import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main>
      <nav className="card">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </main>
  )
}

export default App
