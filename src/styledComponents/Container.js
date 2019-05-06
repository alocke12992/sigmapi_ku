import styled from 'styled-components';
import { media } from 'styledComponents/theme';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  ${media.tablet`
    width: 668px;
  `}

  ${media.desktop`
    width: 1180px;
  `}
`;

export default Container;