import styled from 'styled-components';
import { Container as DefaultContainer } from 'styledComponents';
import { media } from 'styledComponents/theme';


const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    height: 100%;
  `}

  p {
    text-align: center;
  }
`;

const Image = styled.div`
  ${media.tablet`
    height: 125px;
    width: 125px;
  `}

  ${media.desktop`
    height: 150px;
    width: 150px;
  `}
`;

export {
  Container,
  IconWrapper,
  Image,
};
