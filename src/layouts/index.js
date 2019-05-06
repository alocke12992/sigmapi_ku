import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styledComponents/theme';
import 'styles/base.css';
import Navbar from 'components/Navbar';

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <>
    <Navbar location={location} />
    {children}
    </>
  </ThemeProvider>
);

export default Layout