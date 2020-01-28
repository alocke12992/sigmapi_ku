import React from 'react';
import Construction from 'components/Construction';

const ContactPage = ({ data }) => (
  <Construction pageTitle="Contact" president={data.president} />
);

export default ContactPage;

export const query = graphql`
  query {
    president: contentfulPerson(position: { eq: "President"}){
      name
      email
      phone
    }
  }
`;