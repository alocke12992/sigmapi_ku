import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styledComponents/theme';
import 'styles/base.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = ({ children, location }) => {
  console.log("test", name)
  return (
  <ThemeProvider theme={theme}>
    <>
      <Navbar location={location} />
      {children}
      {/* <Footer /> */}
    </>
  </ThemeProvider>
)};

export default Layout

export const query = graphql`
  query {
    president: contentfulPerson(position: { eq: "President"}){
      name
      email
      phone
    }
  }
`;