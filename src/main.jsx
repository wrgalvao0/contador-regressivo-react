import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contador from './routes/Contador.jsx'
import './index.css'
import App from './App.jsx'

let rota = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/contador',
        element: <Contador/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rota}/>
  </StrictMode>,
)
