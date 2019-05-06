import styled from 'styled-components';
import { media, colors } from 'styledComponents/theme';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  // position: fixed;
  // top: 0;
  // z-index: 1;
  background: ${colors.white};
  ${media.tablet`
    padding: 30px 0 20px;
  `}
`;

const Spacer = styled.div`
  height: 130px;

  ${media.tablet`
    height: 160px;
  `}
`;

const Logo = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 200px;

  ${media.tablet`
    max-width: 350px;
  `}

  ${media.desktop`
    max-width: 400px;
  `}
`;

const NavMenu = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  width: 90%;
  margin: 0 auto;

  ${media.tablet`
    max-width: 350px
  `}

  ${media.desktop`
    max-width: 400px;
  `}
`;

export {
  Nav,
  Logo,
  NavMenu,
  Spacer,
};
