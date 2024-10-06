import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './components/Route.jsx'
import ThemeContentProvider from './contexts/ThemeContext.jsx'
import UserContextProvider from './contexts/userContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContentProvider>
      <UserContextProvider>
  
      <AppRouter />
      </UserContextProvider>
    </ThemeContentProvider>
  </StrictMode>,
)
