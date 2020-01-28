import React, { Fragment } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  FooterContainer,
  RouteSection,
  FooterInfo,
  ContactInfo,
} from './styles';
import routes from 'src/routes';

const Footer = ({ president: { name, phone, email } }) => (
  <FooterContainer>
      <FooterInfo>
          <RouteSection>
            <ul>
              {
                routes.map(({route, name}, i) => (
                  <li key={i}>
                    <Link to={`${route}`}>
                      {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </RouteSection>
          <RouteSection>
          <Link to='/contact/'><h4>Contact</h4></Link>
            <ul>
              <li>{name && name}</li>
              <li>President</li>
              <li>{phone && phone}</li>
              <li>{email && email}</li>
            </ul>
          </RouteSection>
      </FooterInfo>
      <ContactInfo>
        <p>Website designed, built and maintained by <a href="https://github.com/alocke12992/" rel="noopener noreferrer">Andrew Locke</a></p>
      </ContactInfo>
  </FooterContainer>
);

export default Footer;