import React from 'react';
import Img from 'gatsby-image';
import { Container, IconWrapper, Image } from './styles';
import { Link } from 'gatsby';

const Icon = ({icon, title, link}) => (
  <Link to={link}>
  <IconWrapper>
    <Image>
      <Img  fluid={icon} />
    </Image>
    <p>{title}</p>
  </IconWrapper>
  </Link>
)

const LearnMore = ({ icons }) => (
  <Container>
    {
      icons.map((icon, i) => {
        if (icon) {
          return <Icon {...icon} key={i} />
        }
      })
    }
  </Container>
);

export default LearnMore;

