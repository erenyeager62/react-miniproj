import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Coffee from './coffee.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Coffee/>
  </StrictMode>,
)
