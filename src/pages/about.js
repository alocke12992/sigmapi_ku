import React from 'react';
import Construction from 'components/Construction';
import About from 'components/pages/About';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => <About {...data.aboutPage } president={data.president} />;

export default AboutPage;

export const query = graphql`
  query {
      aboutPage: contentfulPage(slug: { eq: "about"}){
      title
      hero {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      content {
      childContentfulRichText {
          html
        }
      }
    }
    president: contentfulPerson(position: { eq: "President"}){
      name
      email
      phone
    }
  }
`;
