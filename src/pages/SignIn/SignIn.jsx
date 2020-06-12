import React from 'react';
import { Link as LinkRouter, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import useAuthentication from '../../hooks/useAuthentication';
import { PageWrapper, PageContent, Card, CardContent, TextField } from './styles';

const SignIn = () => {
  const refEmail = React.useRef(null);
  const refPassword = React.useRef(null);
  const [snackbar, setSnackbar] = React.useState({ message: '', open: false });
  const history = useHistory();
  const { onLogin } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = refEmail.current.value;
    const password = refPassword.current.value;

    // TODO: implementar
    const success = false;
    const message = 'Implementar login...';

    if (success) {
      history.push('/restaurants');
    }

    if (message) {
      setSnackbar({
        open: true,
        message,
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ message: '', open: false });
  };

  return (
    <PageWrapper>
      <PageContent>
        <Card raised>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <TextField
                inputRef={refEmail}
                label="E-mail"
                variant="outlined"
                autoComplete="new-password"
              />
              <TextField
                inputRef={refPassword}
                label="Password"
                variant="outlined"
                type="password"
                autoComplete="new-password"
              />
              <Button variant="contained" color="primary" size="large" type="submit">
                Login
              </Button>
            </form>
            <Link to="/sign-up" component={LinkRouter}>
              Don&apos;t have an account? Sign up here
            </Link>
            <Snackbar
              autoHideDuration={5000}
              TransitionComponent={(props) => <Slide {...props} direction="down" />}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={snackbar.open}
              onClose={handleSnackbarClose}
              message={snackbar.message}
            />
          </CardContent>
        </Card>
      </PageContent>
    </PageWrapper>
  );
};

export default SignIn;
