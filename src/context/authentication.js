import React from 'react';
// import { firebase } from '../config/firebase';
// import { listenToUserClaims } from '../helpers/firebase';

const INITIAL_STATE = {
  user: null,
  userClaims: {},
  isAuthReady: false,
};

const AuthenticationContext = React.createContext(null);

export const AuthenticationProvider = (props) => {
  const [authData, setAuthData] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    // TODO: implementar
    // const auth = firebase.auth();
    const stateReady = true;
    const idTokenReady = true;

    // keep tracking when user changes (login/logout)

    // keep tracking when user token changes (claims added/removed)
    setAuthData((prevState) => ({
      ...prevState,
      isAuthReady: stateReady && idTokenReady,
    }));
  }, []);

  const onLogout = async () => {
    // TODO: implementar
  };

  const onLogin = ({ email, password }) => {
    // TODO: implementar
  };

  const authDataValue = React.useMemo(() => ({ ...authData, onLogin, onLogout }), [authData]);

  return <AuthenticationContext.Provider value={authDataValue} {...props} />;
};

export const AuthenticationConsumer = AuthenticationContext.Consumer;

export default AuthenticationContext;
