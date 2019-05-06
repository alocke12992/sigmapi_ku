import React from 'react';
import { LinkButton } from 'styledComponents/Button';
import { Container } from './styles';

const JoinNow = () => (
  <Container>
    <h3>Interested in becoming a brother?</h3>
      <p>Click the link below to learn more.</p>
    <LinkButton to="/join">Join Sigma Pi</LinkButton>
  </Container>
);

export default JoinNow;
