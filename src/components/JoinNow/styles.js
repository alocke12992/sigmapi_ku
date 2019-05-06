import styled from 'styled-components';
import { Container as DefaultContainer } from 'styledComponents';
import { media } from 'styledComponents/theme';

const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export { Container, }