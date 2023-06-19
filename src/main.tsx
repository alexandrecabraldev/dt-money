import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './Components/Global/GlobalStyle.ts'
import { ThemeGlobal } from './Components/Global/ThemeGlobal.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ThemeProvider theme={ThemeGlobal}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </React.StrictMode>

)
