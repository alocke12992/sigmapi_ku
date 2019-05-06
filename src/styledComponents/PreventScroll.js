import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  body {
    overflow: ${props => (props.stopScroll ? 'hidden' : '')};
  }
`;