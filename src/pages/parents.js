import React from 'react';
import Construction from 'components/Construction';
import Parents from 'components/pages/Parents';
import { graphql } from 'gatsby';

const ParentsPage = ({ data }) => <Parents {...data.parentsPage} president={data.president} />

export default ParentsPage;

export const query = graphql`
  query {
      parentsPage: contentfulPage(slug: { eq: "parents"}){
      title
      hero {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      content {
        json
      }
    }
    president: contentfulPerson(position: { eq: "President"}){
      name
      email
      phone
    }
  }
`;