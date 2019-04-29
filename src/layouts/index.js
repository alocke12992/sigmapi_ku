import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styledComponents/theme';
import 'styles/base.css';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Layout