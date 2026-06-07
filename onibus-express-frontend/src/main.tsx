import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BookingProvider } from "./contexts/BookingContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </StrictMode>,
)
