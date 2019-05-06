import React from 'react';
import { Container } from './styles';
import Img from 'gatsby-image';
import richText from 'components/utils/richText';

const Parents = ({title, hero, content}) => {
  return (
    <Container>
      <Img fluid={hero.fluid} />
      <h1>For Parents</h1>
      {richText(content.json)}
    </Container>
  )
};

export default Parents;