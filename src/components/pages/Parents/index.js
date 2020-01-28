import React from 'react';
import { Container } from './styles';
import Img from 'gatsby-image';
import richText from 'components/utils/richText';
import Footer from '../../../components/Footer';

const Parents = ({title, hero, content, president }) => {
  return (
    <>
      <Container>
        <Img fluid={hero.fluid} />
        <h1>For Parents</h1>
        {richText(content.json)}
      </Container>
      <Footer president={president} />
    </>
  )
};

export default Parents;