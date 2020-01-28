import React from 'react';
import { Section, Container } from 'styledComponents';
import Footer from '../Footer';
import { Link } from 'gatsby';

const Construction = ({ pageTitle, president }) => (
  <>
    <Section>
      <Container>
        <h1>{pageTitle}</h1>
        <p>Sorry, this page is currently under construction</p>
        <Link to="/">Go Home</Link>
      </Container>
    </Section>
    {/* <Footer president={president} /> */}
  </>
);

export default Construction;
