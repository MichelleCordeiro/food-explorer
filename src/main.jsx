import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Routes } from './routes'
// import { Home } from './pages/Home'
// import { DishDetails } from './pages/DishDetails'
// import { SignIn } from './pages/SignIn'
// import { SignOut } from './pages/SignOut'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Home /> */}
      {/* <DishDetails /> */}
      {/* <SignIn /> */}
      {/* <SignOut /> */}
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
