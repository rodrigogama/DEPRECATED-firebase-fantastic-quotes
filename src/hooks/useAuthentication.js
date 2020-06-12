import React from 'react';
import AuthenticationContext from '../context/authentication';

const useAuthentication = () => React.useContext(AuthenticationContext);

export default useAuthentication;
