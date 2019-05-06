import styled from 'styled-components';
import { theme } from 'styledComponents/theme';
import Link from 'components/utils/Link';

const defaultButtonStyle = inverted => `
  border: none;
  display: inline-block;
  font-size: .875rem;
  color: ${inverted ? theme.colors.purple : theme.colors.white};
  background-color: ${inverted ? theme.colors.purple : theme.colors.purple};
  border-radius: 1rem;
  letter-spacing: .5px;
  font-weight: 100;
  cursor: pointer;
  transition: background-color .5s ease, color .5s ease;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 28px;
  padding-left: 28px;

  :disabled, &.disabled {
    background-color: #d6d5d4;
    cursor: default;

  }
  :hover {
    background-color: ${theme.colors.midGrey};
    color: ${theme.colors.white};
    transition: background-color .5s ease 0s, color .5s ease 0s;

  }
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  ${props => defaultButtonStyle(props.inverted)}
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  ${props => defaultButtonStyle(props.inverted)}
`;

const OutlinedButton = styled(Button)`
  background-color: transparent;
  color: ${theme.colors.darkGrey};
  min-width: 150px;
  box-shadow: 0px 0px 0px 1px ${theme.colors.lineColor};
  transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  :hover {
    background: transparent;
    color: ${theme.colors.darkGrey};
    box-shadow: 0px 0px 0px 3px ${theme.colors.darkGrey};
    border-color: ${theme.colors.darkGrey};
    transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  }
`;

export { LinkButton, OutlinedButton };
export default Button;
