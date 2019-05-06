import styled from 'styled-components';
import { media, colors } from 'styledComponents/theme';

const Spacer = styled.div`
  height: 15px;
`;

const MenuWrapper = styled.div`
  z-index: 1;
  ${media.tablet`
    display: none;
  `}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.9;
  display: flex;
  align-items:center;
  background: ${colors.white};
  width: 100%;
  color: black;
`;

export { Spacer, MenuWrapper, Container }