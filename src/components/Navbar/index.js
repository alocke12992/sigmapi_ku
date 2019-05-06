import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import routes from 'src/routes';
import {
  Nav,
  Logo,
  NavMenu,
  Spacer,
} from './styles';
import logo from 'static/images/Logo.png';

const PureNav = ({img}) => (
  <>
    <Nav>
      <Logo>
        <Link to="/">
        <Img fluid={img} />
        </Link>
      </Logo>
      <NavMenu>
        {
          routes.map(({route, name}, i) => (
            <Link
              key={i}
              to={route}
              className="nav-link"
            >
              {name}
            </Link>
          ))
        }
      </NavMenu>
    </Nav>
    {/* <Spacer /> */}
  </>
);

const Navbar = (props) => {
  console.log(props)

  return (
    <StaticQuery
    query={graphql`
      query LogoQuery {
        logo: file(relativePath: { eq: "Logo.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <PureNav img={data.logo.childImageSharp.fluid} /> }
  />
  )
};

export default Navbar;
