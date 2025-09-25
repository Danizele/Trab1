import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetailPage from './pages/UserDetailPage'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <UsersPage /> },
  { path: '/users/:id', element: <UserDetailPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetailPage from './pages/UserDetailPage'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <UsersPage /> },
  { path: '/users/:id', element: <UserDetailPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


