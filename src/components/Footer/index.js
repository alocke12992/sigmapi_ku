import React, { Fragment } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  FooterContainer,
  RouteSection,
  FooterInfo,
  ContactInfo,
} from './styles';
import routes from 'src/routes';

const Footer = () => (
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
              <li>Clayton Sell</li>
              <li>President</li>
              <li>(316) 347-4466</li>
              <li>BetaDelta@SigmaPi.org</li>
            </ul>
          </RouteSection>
      </FooterInfo>
      <ContactInfo>
      </ContactInfo>
  </FooterContainer>
);

export default Footer;