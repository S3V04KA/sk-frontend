import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Pages/Main/Main.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './Pages/Welcome/Welcome.tsx'
import Project from './Pages/Project/Project.tsx'

const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/project/:id',
    element: <Project/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
