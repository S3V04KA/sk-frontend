import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Pages/Main/Main.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
