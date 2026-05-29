import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App'
import { About } from './pages/About'
import { Home, homeLoader } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])
