import styled from 'styled-components';
import { Button as Btn, colors } from 'styledComponents';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const Input = withStyles({
  root: {
    '& label.Mui-focused': {
      color: colors.purple,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.purple,
    },
    width: '100%',
  },
})(TextField);

const Form = styled.form`
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    margin: 0;
  }

  p {

    text-align: center;

    a {
      color: ${colors.purple};
    }
  }
`;

const Button = styled(Btn)`
  width: 90%;
  margin-top: 1rem;
  max-width: 250px;
`;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export { Input, Form, Button, useStyles };