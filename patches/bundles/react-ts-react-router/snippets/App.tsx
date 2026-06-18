import { Link, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App() {
  return (
    <main>
      <nav className="card">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
