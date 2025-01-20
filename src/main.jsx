import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyButton from './Components/AnswerButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyButton />
  </StrictMode>,

)
