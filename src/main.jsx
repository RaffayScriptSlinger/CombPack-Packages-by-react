// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import AppRouter from './Route.jsx'
// import ThemeContentProvider from './contexts/ThemeContext.jsx'
// import UserContextProvider from './contexts/userContext.jsx'
// import cartContextProvider from './contexts/CartContext.jsx'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeContentProvider>
//       <UserContextProvider>
//         <cartContextProvider>
   
//       <AppRouter />
//       </cartContextProvider>
//       </UserContextProvider>
//     </ThemeContentProvider>
//   </StrictMode>,
// )
// index.js or App.js
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import AppRouter from './Route.jsx';
// import ThemeContentProvider from './contexts/ThemeContext.jsx';
// import UserContextProvider from './contexts/userContext.jsx';
// import { CartProvider } from './contexts/CartContext.jsx'; // Update import

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeContentProvider>
//       <UserContextProvider>
//         <CartProvider> {/* Use CartProvider */}
//           <AppRouter />
//         </CartProvider>
//       </UserContextProvider>
//     </ThemeContentProvider>
//   </StrictMode>,
// );
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Route.jsx';
import ThemeContentProvider from './contexts/ThemeContext.jsx';
import UserContextProvider from './contexts/userContext.jsx';
// import { CartProvider } from './contexts/CartContext.jsx'; // Ensure this import is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContentProvider>
      <UserContextProvider>
        {/* <CartProvider> Ensure this matches the export from CartContext */}
          <AppRouter />
        {/* </CartProvider> */}
      </UserContextProvider>
    </ThemeContentProvider>
  </StrictMode>
);

