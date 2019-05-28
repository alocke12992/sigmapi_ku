import styled from 'styled-components';
import { Button as Btn } from 'styledComponents';

const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  border-style: none;
  border-bottom: solid black 1px;
  outline: none;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(Btn)`
  width: 90%;
`;

export { Input, Form, Btn };