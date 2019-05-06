import styled from 'styled-components';
import { media, colors } from 'styledComponents/theme';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  z-index: 1;
  background: ${colors.white};
  ${media.tablet`
    padding: 30px 0 20px;
  `}
`;

const MobileNav = styled.div`
  width: 100%;
  ${media.tablet`
    display: none;
  `}
`;

const Spacer = styled.div`
  height: 50px;
`;

const Logo = styled.div`
  display: none;

  ${media.tablet`
    display: block;
    margin: 0 auto;
    width: 90%;
    max-width: 350px;
  `}

  ${media.desktop`
    max-width: 400px;
  `}
`;

const NavMenu = styled.div`
  display: none;
  ${media.tablet`
    max-width: 400px
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  `}

  ${media.desktop`
    max-width: 500px;
  `}
`;

export {
  Nav,
  Logo,
  NavMenu,
  Spacer,
  MobileNav,
};
