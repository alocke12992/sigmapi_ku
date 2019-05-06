import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from 'styledComponents';
import InterestForm from 'components/InterestForm';
import LearnMore from 'components/LearnMore';
import JoinNow from 'components/JoinNow';
import { LinkButton } from 'styledComponents/Button';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const hero = get(this, 'props.data.hero.childImageSharp.fluid')
    const crest = get(this, 'props.data.crest.childImageSharp.fluid')
    const greekCross = get(this, 'props.data.greekCross.childImageSharp.fluid')
    const omega = get(this, 'props.data.omega.childImageSharp.fluid')
    const parents = get(this, 'props.data.parents.childImageSharp.fluid')

    const icons = [
      {
        "icon": crest,
        "title": "Join Sigma Pi",
        "link": "/join",
      },
      {
        "icon": greekCross,
        "title": "About Sigma Pi",
        "link": "/about",
      },
      {
        "icon": parents,
        "title": "Parents",
        "link": "/parents",
      },
    ]

    return (
      <>
        <Helmet title={siteTitle} />
        <Img fluid={hero} />
        <Section>
          <LearnMore icons={icons} />
        </Section>
        <Section dark>
          <JoinNow />
        </Section>
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
    crest: file(relativePath: { eq: "crest.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    greekCross: file(relativePath: { eq: "greek-cross.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    omega: file(relativePath: { eq: "omega.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parents: file(relativePath: { eq: "parents.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
