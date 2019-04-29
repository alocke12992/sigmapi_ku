import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import InterestForm from 'components/InterestForm';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  height: 100vh;
  padding: 10%;
`;

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const hero = get(this, 'props.data.hero.childImageSharp.fluid')
    return (
      <>
        <Helmet title={siteTitle} />
        <Container>
          <Img fluid={hero} />
          <InterestForm />
        </Container>
      </>
    )
  }
}

export default RootIndex

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "house.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
