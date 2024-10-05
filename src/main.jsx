import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Route.jsx'
import ThemeContentProvider from './contexts/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContentProvider>
      <AppRouter />
    </ThemeContentProvider>
  </StrictMode>,
)
