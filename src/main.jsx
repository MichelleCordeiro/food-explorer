import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      {/* <SignIn /> */}
      {/* <SignOut /> */}
    </ThemeProvider>
  </React.StrictMode>
)
