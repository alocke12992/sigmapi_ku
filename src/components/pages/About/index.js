import React from 'react';
import { Container } from './styles';
import Img from 'gatsby-image';

const About = ({title, hero, content}) => {
  const { html } = content.childContentfulRichText;
  return (
    <Container>
      <Img fluid={hero.fluid} />
      <h1>About Sigma Pi</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />;
    </Container>
  )
};

export default About;

