import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MealsPage from './pages/MealsPage.jsx'
import MealDetailPage from './pages/MealDetailPage.jsx'
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout>
        <MealsPage />
      </RootLayout>
    ),
  },
  {
    path: '/meal/:id',
    element: (
      <RootLayout>
        <MealDetailPage />
      </RootLayout>
    ),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
