import React from 'react';
import Construction from 'components/Construction';
import { graphql } from 'gatsby';

const AboutPage = () => (
  <Construction pageTitle="About Sigma Pi" />
);

export default AboutPage;

export const query = graphql`
  query {
      contentfulPage(slug: { eq: "about"}){
      title
      hero {
        fluid {
          tracedSVG
        }
      }
      content {
        paragraph: content {
          content {
            value
          }
        }
      }
    }
  }
`;
