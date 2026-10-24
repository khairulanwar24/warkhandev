import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/google-sans-flex'
import '@fontsource/google-sans-code/400.css'
import '@fontsource/google-sans-code/500.css'
import App from './App'
import { LangProvider } from './i18n'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
)
